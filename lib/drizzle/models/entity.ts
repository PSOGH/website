import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp
} from 'drizzle-orm/pg-core';

export const entities = pgTable('tblEntities', {
  id: serial('id').primaryKey(),
  entityName: text('entityName'),
  entityType: integer('entityType'),
  entityRole: integer('entityRole'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const entityTypes = pgTable('tblEntityTypes', {
  id: serial('id').primaryKey(),
  entityTypeName: text('entityTypeName').unique(),
});

export const entityTypesRelations = relations(entityTypes, ({ many }) => ({
  entity: many(entities),
}));

export const entityRoles = pgTable('tblEntityRoles', {
  id: serial('id').primaryKey(),
  entityRoleName: text('entityRoleName').unique(),
});

export const entityRolesRelations = relations(entityRoles, ({ many }) => ({
  entity: many(entities),
}));

export const entityEmails = pgTable('tblEntityEmails', {
  id: serial('id').primaryKey(),
  entityEmail: text('entityEmail'),
  entity: integer('entity'),
});

export const entityEmailRelations = relations(entityEmails, ({ one }) => ({
  entity: one(entities, {
    fields: [entityEmails.entity],
    references: [entities.id]
  }),
}));

export const entityPhoneNumbers = pgTable('tblEntityPhoneNumbers', {
  id: serial('id').primaryKey(),
  entityPhoneNumber: text('entityPhoneNumber'),
  entity: integer('entity'),
});

export const entityPhoneRelations = relations(entityPhoneNumbers, ({ one }) => ({
  entity: one(entities, {
    fields: [entityPhoneNumbers.entity],
    references: [entities.id]
  }),
}));

export const entityWebsites = pgTable('tblEntityWebsites', {
  id: serial('id').primaryKey(),
  entityWebsite: text('entityWebsite'),
  entity: integer('entity'),
});

export const entityWebsiteRelations = relations(entityWebsites, ({ one }) => ({
  entity: one(entities, {
    fields: [entityWebsites.entity],
    references: [entities.id]
  }),
}));

export const entityLogos = pgTable('tblEntityLogos', {
  id: serial('id').primaryKey(),
  entityLogo: text('entityLogo'),
  entity: integer('entity'),
});

export const entityLogoRelations = relations(entityLogos, ({ one }) => ({
  entity: one(entities, {
    fields: [entityLogos.entity],
    references: [entities.id]
  }),
}));

export const entityAddresses = pgTable('tblEntityAddresses', {
  id: serial('id').primaryKey(),
  entityAddress: text('entityAddress'),
  entityAddress2: text('entityAddress2'),
  city: text('city'),
  state: text('state'),
  zipCode: text('zipCode'),
  entity: integer('entity'),
});

export const entityAddressRelations = relations(entityAddresses, ({ one }) => ({
  entity: one(entities, {
    fields: [entityAddresses.entity],
    references: [entities.id]
  }),
}));

export const entityRepresentatives = pgTable('tblEntityRepresentatives', {
  primaryEntity: integer('primaryEntity'),
  representativeEntity: integer('representativeEntity'),
}, (t) => ({
  primaryKey: [t.primaryEntity, t.representativeEntity],
}));

export const entityRepresentativeRelations = relations(entityRepresentatives, ({ one }) => ({
  primary: one(entities, {
    fields: [entityRepresentatives.primaryEntity],
    references: [entities.id],
    relationName: 'representedBy'
  }),
  representative: one(entities, {
    fields: [entityRepresentatives.representativeEntity],
    references: [entities.id],
    relationName: 'representative'
  }),
}));

export const entityRelations = relations(entities, ({ one, many }) => ({
  entityType: one(entityTypes, {
    fields: [entities.entityType],
    references: [entityTypes.id]
  }),
  entityRole: one(entityRoles, {
    fields: [entities.entityRole],
    references: [entityRoles.id]
  }),
  emails: many(entityEmails),
  phoneNumbers: many(entityPhoneNumbers),
  websites: many(entityWebsites),
  logos: many(entityLogos),
  addresses: many(entityAddresses),
  representatives: many(entityRepresentatives, {relationName: 'representative'}),
  representedBy: many(entityRepresentatives, {relationName: 'representedBy'}),
}));

export type Entity = typeof entities.$inferSelect;
export type NewEntity = typeof entities.$inferInsert;

export type EntityType = typeof entityTypes.$inferSelect;
export type NewEntityType = typeof entityTypes.$inferInsert;

export type EntityRole = typeof entityRoles.$inferSelect;
export type NewEntityRole = typeof entityRoles.$inferInsert;

export type EntityEmail = typeof entityEmails.$inferSelect;
export type NewEntityEmail = typeof entityEmails.$inferInsert;

export type EntityPhoneNumber = typeof entityPhoneNumbers.$inferSelect;
export type NewEntityPhoneNumber = typeof entityPhoneNumbers.$inferInsert;

export type EntityWebsite = typeof entityWebsites.$inferSelect;
export type NewEntityWebsite = typeof entityWebsites.$inferInsert;

export type EntityLogo = typeof entityLogos.$inferSelect;
export type NewEntityLogo = typeof entityLogos.$inferInsert;

export type EntityAddress = typeof entityAddresses.$inferSelect;
export type NewEntityAddress = typeof entityAddresses.$inferInsert;

export type EntityRepresentative = typeof entityRepresentatives.$inferSelect;
export type NewEntityRepresentative = typeof entityRepresentatives.$inferInsert;

export type EntityRepresentativeSemiFull = EntityRepresentative & {
  representative: EntityFull | null,
}
export type EntityRepresentativeFull = EntityRepresentative & {
  representative: EntityFull | null,
  primary: EntityFull | null,
}

export type EntityFull = Entity & {
  entityType: EntityType | null,
  entityRole: EntityRole | null,
  emails: EntityEmail[] | null,
  phoneNumbers: EntityPhoneNumber[] | null,
  websites: EntityWebsite[] | null,
  logos: EntityLogo[] | null,
  addresses: EntityAddress[] | null,
  representatives?: (EntityRepresentative | null)[] | null,
  representedBy?: (EntityRepresentativeSemiFull | null)[] | null,
}
