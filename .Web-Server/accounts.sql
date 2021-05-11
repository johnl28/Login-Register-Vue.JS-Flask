/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : SQLite
 Source Server Version : 3017000
 Source Schema         : main

 Target Server Type    : SQLite
 Target Server Version : 3017000
 File Encoding         : 65001

 Date: 07/04/2021 01:21:24
*/

PRAGMA foreign_keys = false;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS "accounts";
CREATE TABLE "accounts" (
  "id" INTEGER NOT NULL DEFAULT 0,
  "username" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "level" integer NOT NULL DEFAULT 0,
  "status" text NOT NULL DEFAULT OK,
  "email" TEXT,
  PRIMARY KEY ("id", "username")
);

PRAGMA foreign_keys = true;
