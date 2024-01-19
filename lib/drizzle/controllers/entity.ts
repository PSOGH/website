import { db, schema } from '../db';
import ImageKit from 'imagekit'
import { v4 as uuidv4 } from 'uuid';

type EntityID = (typeof schema.entities.$inferSelect)['id'];
type NewEntity = typeof schema.entities.$inferInsert;

export type EntityType = typeof schema.entityTypes.$inferSelect;
export type NewEntityType = typeof schema.entityTypes.$inferInsert;

export async function registerEntityType(newEntityType: NewEntityType) {
  await db.insert(schema.entityTypes).values(newEntityType);
}

export async function registerEntityTypes(newEntityTypes: NewEntityType[]) {
  await db.insert(schema.entityTypes).values(newEntityTypes);
}

export async function getEntityTypes() {
  return await db.select().from(schema.entityTypes).execute();
}

export type EntityRole = typeof schema.entityRoles.$inferSelect;
export type NewEntityRole = typeof schema.entityRoles.$inferInsert;

export async function registerEntityRole(newEntityRole: NewEntityRole) {
  await db.insert(schema.entityRoles).values(newEntityRole);
}

export async function registerEntityRoles(newEntityRoles: NewEntityRole[]) {
  await db.insert(schema.entityRoles).values(newEntityRoles);
}

export async function getEntityRoles() {
  return await db.select().from(schema.entityRoles).execute();
}

export async function addEntityEmail(entity: EntityID, email: string) {
  return await db.insert(schema.entityEmails).values({
    entity: entity,
    entityEmail: email,
  });
}

export async function addEntityPhoneNumber(entity: EntityID, phoneNumber: string) {
  return await db.insert(schema.entityPhoneNumbers).values({
    entity: entity,
    entityPhoneNumber: phoneNumber,
  });
}

export async function addEntityWebsite(entity: EntityID, website: string) {
  return await db.insert(schema.entityWebsites).values({
    entity: entity,
    entityWebsite: website,
  });
}

export async function addEntityLogo(entity: EntityID, logo: string) {
  return await db.insert(schema.entityLogos).values({
    entity: entity,
    entityLogo: logo,
  });
}

export async function addEntityAddress(entity: EntityID, address: string, address2: string, city: string, state: string, zipCode: string) {
  return await db.insert(schema.entityAddresses).values({
    entity: entity,
    entityAddress: address,
    entityAddress2: address2,
    city: city,
    state: state,
    zipCode: zipCode,
  });
}

export async function addEntityRepresentative(primaryEntity: EntityID, representativeEntity: EntityID) {
  return await db.insert(schema.entityRepresentatives).values({
    primaryEntity: primaryEntity,
    representativeEntity: representativeEntity,
  });
}

export async function addEntity(
  entityName: string,
  entityType: number,
  entityRole: number,
  emails: string[],
  phoneNumbers: string[],
  websites: string[],
  logos: string[][],
  address: {
    address: string,
    address2: string,
    city: string,
    state: string,
    zipCode: string,
  }[],
  representatives: number[]
) {
  const entityIdReturn = await db.insert(
    schema.entities
  ).values({
    entityName: entityName,
    entityType: entityType,
    entityRole: entityRole,
    createdAt: new Date(),
  }).returning({
    id: schema.entities.id,
  });
  const entityId = entityIdReturn[0].id;
  const entityEmails: {entity: number, entityEmail: string}[] = emails.map(
    (email) => {
      return {
        entity: entityId,
        entityEmail: email,
      }
    }
  );
  if(entityEmails.length > 0) {
    await db.insert(
      schema.entityEmails
    ).values(
      entityEmails
    ).execute(
    );
  }
  const entityPhoneNumbers: {entity: number, entityPhoneNumber: string}[] = phoneNumbers.map(
    (phoneNumber) => {
      return {
        entity: entityId,
        entityPhoneNumber: phoneNumber,
      }
    }
  );
  if(entityPhoneNumbers.length > 0) {
    await db.insert(
      schema.entityPhoneNumbers
    ).values(
      entityPhoneNumbers
    ).execute(
    );
  }
  const entityWebsites: {entity: number, entityWebsite: string}[] = websites.map(
    (website) => {
      return {
        entity: entityId,
        entityWebsite: website,
      }
    }
  );
  if(entityWebsites.length > 0) {
    await db.insert(
      schema.entityWebsites
    ).values(
      entityWebsites
    ).execute(
    );
  }
  function uploadLogo(logo_file: string, logo_file_path: string) {
    var imagekit = new ImageKit({
      publicKey : process.env.IMAGEKIT_PUBLIC || "",
      privateKey : process.env.IMAGEKIT_PRIVATE || "",
      urlEndpoint : process.env.IMAGEKIT_ENDPOINT || "",
    });
    
    var logo_vals = {
      file : logo_file, //required
      folder: `${process.env.IMAGEKIT_FOLDER}/entities/logos`,
      fileName : `${uuidv4()}.${logo_file_path.split(".").pop()}`,   //required
    }
    imagekit.upload(logo_vals, function(error, result) {
        if(error) console.log(error);
        else db.insert(
          schema.entityLogos
        ).values({
          entity: entityId,
          entityLogo: result?.filePath
        }).then(
          () => {
            console.log(result);
          }
        ).catch(
          (error) => {
            console.log(error);
          }
        );
    });
    return `${logo_vals.folder}/${logo_vals.fileName}`;
  }
  const entityLogos: {entity: number, entityLogo: string}[] = logos.map(
    (logo) => {
      return {
        entity: entityId,
        entityLogo: uploadLogo(logo[0], logo[1])
      }
    }
  );
  // console.log(entityLogos);
  // if(entityLogos.length > 0) {
  //   await db.insert(
  //     schema.entityLogos
  //   ).values(
  //     entityLogos
  //   );
  // }
  const entityAddresses: {
    entity: number,
    entityAddress: string,
    entityAddress2: string,
    city: string,
    state: string,
    zipCode: string,
  }[] = address.map(
    (address) => {
      return {
        entity: entityId,
        entityAddress: address.address,
        entityAddress2: address.address2,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
      }
    }
  );
  if(entityAddresses.length > 0) {
    await db.insert(
      schema.entityAddresses
    ).values(
      entityAddresses
    ).execute(
    );
  }
  const entityRepresentatives: {primaryEntity: number, representativeEntity: number}[] = representatives.map(
    (representative) => {
      return {
        primaryEntity: entityId,
        representativeEntity: representative,
      }
    }
  );
  if(entityRepresentatives.length > 0) {
    await db.insert(
      schema.entityRepresentatives
    ).values(
      entityRepresentatives
    ).execute(
    );
  }
  console.log(entityId);
  return entityId;
}
