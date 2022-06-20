/*
 Navicat Premium Data Transfer

 Source Server         : wodo_game_activity
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : wodo_game_activity_db

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 20/06/2022 14:49:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for USER_STATUS
-- ----------------------------
DROP TABLE IF EXISTS `USER_STATUS`;
CREATE TABLE `USER_STATUS`  (
  `userUid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gameUid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` int NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `version` int NOT NULL DEFAULT 0,
  PRIMARY KEY (`userUid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
