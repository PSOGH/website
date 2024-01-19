import { registerEntityRoles, registerEntityTypes } from "../controllers/entity";
import { db, schema } from "../db";

export async function seed_entity_data() {
  await db.delete(schema.entityTypes);
  await registerEntityTypes([
    {entityTypeName: 'Person', id: 1},
    {entityTypeName: 'Organisation', id: 2},
  ]);
  await db.delete(schema.entityRoles);
  await registerEntityRoles([
    {entityRoleName: 'Admin', id: 1},
    {entityRoleName: 'Organiser', id: 2},
    {entityRoleName: 'Member', id: 3},
    {entityRoleName: 'Vendor', id: 4},
    {entityRoleName: 'Partner', id: 5},
    {entityRoleName: 'Others', id: 6},
  ]);
  await db.delete(schema.entities);
  await db.delete(schema.entityEmails);
  await db.delete(schema.entityPhoneNumbers);
  await db.delete(schema.entityWebsites);
  await db.delete(schema.entityLogos);
  await db.delete(schema.entityAddresses);
  await db.delete(schema.entityRepresentatives);
}
