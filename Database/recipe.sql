-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2026 at 12:47 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `id` bigint(20) NOT NULL,
  `cooking_time` varchar(255) DEFAULT NULL,
  `count` bigint(20) DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `difficulty_level` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `incredients` text DEFAULT NULL,
  `steps` text DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `views` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`id`, `cooking_time`, `count`, `created_by`, `difficulty_level`, `image`, `incredients`, `steps`, `title`, `user_id`, `views`) VALUES
(3, '25 minutes', NULL, 'Vijay', 'Medium', 'https://i.redd.it/w0ysmpi53yg61.jpg', 'Ramen noodles, Chicken broth, Soy sauce, Ginger, Garlic, Boiled egg, Spring onions, Nori (seaweed)', '1. Boil the ramen noodles until soft. 2. In another pot, heat chicken broth with soy sauce, ginger, and garlic. 3. Place noodles in a bowl, pour hot broth over them. 4. Top with sliced boiled egg, spring onions, and nori.', 'Ramen', 1, 1),
(153, 'Prep time: 10 minutes  Marinating time: 120 minutes (or overnight)  Cooking time: 15 minutes  Total: About 2.5 hours including marination', NULL, 'Ujay', 'Medium', 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/8388480a-d617-507e-89d8-87a7b593147a/619cfbe7-bac1-5392-8306-90f7774fd2ed.jpg', '2 lbs boneless, skinless chicken thighs (or breasts)\n\n3 tablespoons olive oil\n\n2 tablespoons lemon juice\n\n4 garlic cloves, minced\n\n1 teaspoon paprika\n\n¾ teaspoon salt\n\n½ teaspoon ground cardamom\n\n½ teaspoon ground cumin\n\n¼ teaspoon ground cinnamon\n\n¼ teaspoon crushed red pepper flakes\n\nOptional: Greek yogurt (for marinade)\n\nTo serve: flatbreads (pita or Lebanese), sliced lettuce, tomatoes, onions, pickles, tahini sauce or garlic sauce\n\n', 'In a bowl, whisk together olive oil, lemon juice, garlic, paprika, salt, cardamom, cumin, cinnamon, and crushed red pepper flakes.\n\nAdd chicken and toss to coat well. Marinate covered in the refrigerator for at least 2 hours or overnight.\n\nPreheat grill or skillet on medium-high heat.\n\nCook chicken until fully cooked, turning occasionally (about 10-15 minutes).\n\nRemove chicken and slice thinly, similar to traditional shawarma strips.\n\nServe on warm flatbread with lettuce, tomatoes, onions, pickles, and drizzle with tahini or garlic sauce.', 'Chicken Shawarma', 202, 1),
(202, '20 minutes', NULL, 'Ajay', 'Easy', 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', '200g spaghetti\n\n4 cloves garlic, thinly sliced\n\n1/4 cup olive oil\n\n1 tsp red chili flakes\n\nSalt to taste\n\nFresh parsley, chopped (for garnish)\n\nParmesan cheese (optional)', 'Cook the spaghetti in boiling salted water until al dente. Drain and set aside.\n\nIn a frying pan, heat the olive oil over medium heat.\n\nAdd the sliced garlic and sauté until fragrant and lightly golden.\n\nAdd red chili flakes and stir.\n\nToss in the cooked spaghetti and mix well to coat evenly with the garlic and chili oil.\n\nSeason with salt and sprinkle chopped parsley on top.\n\nServe hot, garnished with Parmesan cheese if desired.', 'Spaghetti Aglio e Olio', 252, NULL),
(252, '20 minutes', NULL, 'Ajay', 'Easy', 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', '1 1/2 cups all-purpose flour\n\n3 1/2 tsp baking powder\n\n1 tsp salt\n\n1 tbsp white sugar\n\n1 1/4 cups milk\n\n1 egg\n\n3 tbsp butter, melted\n\n', 'In a large bowl, sift together the flour, baking powder, salt, and sugar.\n\nMake a well in the center and pour in the milk, egg, and melted butter; mix until smooth.\n\nHeat a lightly oiled griddle or frying pan over medium-high heat.\n\nPour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.\n\nBrown on both sides and serve hot with syrup or toppings of choice.', 'Classic Pancakes', 252, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `recipe_seq`
--

CREATE TABLE `recipe_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_seq`
--

INSERT INTO `recipe_seq` (`next_val`) VALUES
(351);

-- --------------------------------------------------------

--
-- Table structure for table `recipe_views`
--

CREATE TABLE `recipe_views` (
  `id` bigint(20) NOT NULL,
  `views` bigint(20) DEFAULT NULL,
  `recipe_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `recipe_views_seq`
--

CREATE TABLE `recipe_views_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe_views_seq`
--

INSERT INTO `recipe_views_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `is_admin` bit(1) DEFAULT NULL,
  `is_block` bit(1) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `admin` bit(1) DEFAULT NULL,
  `blocked` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `fullname`, `is_admin`, `is_block`, `password`, `token`, `admin`, `blocked`) VALUES
(0, 'mastercontroller@gmail.com', 'Master', b'1', b'0', '$2a$10$61xL26Jmq/jhB.VlRD2YHe0MQPLa25VYR2oNyQibThQBgCdqIIAQq', NULL, NULL, NULL),
(1, 'vijay@gmail.com', 'Vijay', b'0', b'0', '$2a$10$1QGj5sekrvxfGJxAvk3V1Ol3JCsblPbn0VHEc7y2ghIEgbKJtC4VO', 'vrhhROEPhUnoduuOSPxOMlVYXzoXwfZpgBCC1FMRNGIZolqwQcK1WFGtk1Qr', NULL, NULL),
(103, 'stack@gmail.com', 'Stack', b'0', b'0', '$2a$10$PfdjlM9xOmVCXu9o4nlUyOcUQL.v035XqRpxp/ONdbizmmLjZuOxC', 'ZxD8E2shQ6NLHO3WG2esLoB93TWsmKhb0nYJNXYXrSC5xMQapi96nJr8Ndhh', NULL, NULL),
(202, 'ujay@gmail.com', 'Ujay', b'0', b'0', '$2a$10$yiV5rV8dGZ5/VWpxkaIYCee.fJvsmYXZjTkl4y62CkJdh1JCj5xS6', 'ox8tgXEcrjWUJAnqKH6QpFt4HsOwHpGrFT2E9iFAGvZUDBFNagns3KCoRIPr', NULL, NULL),
(252, 'ajay@gmail.com', 'Ajay', b'0', b'0', '$2a$10$0kNOdR3Lb3RGqKkXe.VJOOKWvz9EqZjN8uXIfHZDhsMdrgoqLnBBe', 'fVLrzthRGH45YjWejnqmmlakxP215vuz6aCMpTyZ6OZocsSFtmUPU05Qw6H2', NULL, NULL),
(302, 'kmahesh36678@gmail.com', 'mahesh', b'0', b'0', '$2a$10$2K/fB.9i3iiw5v1/CxbzSOPTA26uXpA.hR/5Y7Q7Jj36nSgn13UPu', 'WmjotfErF7NtJ4IKcRJ9uBo19Ct6z6JfICaUrFvFl5w2FLo5doo2ToiIq4d1', NULL, NULL),
(352, 'kumar@gmail.com', 'kumar', b'0', b'0', '$2a$10$Nnk.aNZnQ0qIxNUR7F8LZu5BHR5lQMYnP6wI7STmINA.flpd7OOnq', 'gYU45wXzb4u2ciSAiJyVEbNuUcWqtX8aQlOCcq5jlnzXBzuHRMvX4ARuROuJ', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_seq`
--

CREATE TABLE `users_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_seq`
--

INSERT INTO `users_seq` (`next_val`) VALUES
(451);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5mx01yw4j003wisa2aqmwir6l` (`user_id`);

--
-- Indexes for table `recipe_views`
--
ALTER TABLE `recipe_views`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjjf0gl4y97wgkxh76fkpxnv1e` (`recipe_id`),
  ADD KEY `FKqk9lqm4jmd9rylxa32msy43c8` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `recipe`
--
ALTER TABLE `recipe`
  ADD CONSTRAINT `FK5mx01yw4j003wisa2aqmwir6l` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `recipe_views`
--
ALTER TABLE `recipe_views`
  ADD CONSTRAINT `FKjjf0gl4y97wgkxh76fkpxnv1e` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`),
  ADD CONSTRAINT `FKqk9lqm4jmd9rylxa32msy43c8` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
