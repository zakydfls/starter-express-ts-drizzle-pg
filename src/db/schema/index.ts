import {pgTable, timestamp, uuid, varchar, pgEnum, PgTable, PgEnum} from "drizzle-orm/pg-core";
import {InferInsertModel, InferSelectModel} from "drizzle-orm";

export const user_role_enum = pgEnum('user_role', ['BUMN', 'BUMD','PEMDA']);
export const admin_role_enum = pgEnum('admin_role', ['KANWIL', 'SUPER_ADMIN','KPPN']);

export const users :PgTable = pgTable('user', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    username: varchar('username').notNull().unique(),
    password: varchar('password').notNull(),
    role: user_role_enum('user_role').notNull().default('BUMN'),
    token: varchar('token'),
    createdAt: timestamp('created_at').defaultNow().notNull()
})

export const admin :PgTable = pgTable('admin', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    username: varchar('username').notNull().unique(),
    password: varchar('password').notNull(),
    role: admin_role_enum('admin_role').notNull().default('KPPN'),
    token: varchar('token'),
    createdAt: timestamp('created_at').defaultNow().notNull()
})

export type User = InferSelectModel<typeof users>
export type  NewUser = InferInsertModel<typeof users>

export type Admin = InferSelectModel<typeof users>
export type NewAdmin = InferInsertModel<typeof admin>
