import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1662039901899 implements MigrationInterface {
    name = 'createTables1662039901899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "propertiesId" uuid, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP DEFAULT now(), CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Shedules" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" date NOT NULL DEFAULT now(), "hour" TIME NOT NULL DEFAULT now(), "userId" uuid NOT NULL, "propertiesId" uuid NOT NULL, CONSTRAINT "PK_ed614131d945e3c3fa9ec56b692" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sold" boolean NOT NULL DEFAULT false, "value" numeric(12,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, "categoryId" uuid, CONSTRAINT "REL_d947b30b286a2b94fdd257d014" UNIQUE ("addressId"), CONSTRAINT "PK_0840069eb699a18f3ad6e829ae8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "district" character varying NOT NULL, "zipCode" character varying(8) NOT NULL, "number" character varying, "city" character varying NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_63706e22c749e91043b2c3150af" FOREIGN KEY ("propertiesId") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Shedules" ADD CONSTRAINT "FK_8cfcee6d56a20ee696ed6c28d08" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Shedules" ADD CONSTRAINT "FK_11b1ef3c5f3619a355e0ba9f4e7" FOREIGN KEY ("propertiesId") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_d947b30b286a2b94fdd257d014a" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_c35c840c02812719d692907c74c" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_c35c840c02812719d692907c74c"`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_d947b30b286a2b94fdd257d014a"`);
        await queryRunner.query(`ALTER TABLE "Shedules" DROP CONSTRAINT "FK_11b1ef3c5f3619a355e0ba9f4e7"`);
        await queryRunner.query(`ALTER TABLE "Shedules" DROP CONSTRAINT "FK_8cfcee6d56a20ee696ed6c28d08"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_63706e22c749e91043b2c3150af"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "Properties"`);
        await queryRunner.query(`DROP TABLE "Shedules"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
