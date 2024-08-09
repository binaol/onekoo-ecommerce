-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2024 at 12:53 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onekoo_ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `achievement`
--

CREATE TABLE `achievement` (
  `Achievement_ID` int(11) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `achievement`
--

INSERT INTO `achievement` (`Achievement_ID`, `Image`, `Title`, `Description`) VALUES
(1, 'image_1721199754776.jpg', 'CSR Achievement', 'we achieved all in the past year.'),
(2, 'image_1721202426994.jpg', 'akjlkfsd alkf', 'sdkjlkafj adk aslkdlkdflkekd lske alkleian '),
(3, 'image_1721202734094.jpg', 'sdkjfl aslkdjf', 'dsfj;lka slkfs;lkkd asdfeoioieuiurewiou akalkf afdjalkf eoiuqwoiqw dlkjalkfoieruowqiqwoe salkadlk akle9 ajdl;kd'),
(4, 'image_1721203836686.jpg', 'asdfakdj ', 'adioueporiakkajf eoiuqwoe sasflkjoie ak akiiew a lkjdlkjfasd'),
(5, 'image_1721644267436.jpg', 'akdjlas aadlk', 'sdlj aldkf;a aleoieuoiqwqoi akfa;kj dlkaoieakl'),
(6, 'image_1721644285487.jpg', 'adfaiuwor', 'I slkjels eiowppalkmjvewee dsee');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'coffee', 'Our coffee products', '2024-07-20 07:27:47', '2024-07-26 09:22:59'),
(2, 'cookie', 'Our shoe products', '2024-07-20 07:28:03', '2024-07-26 09:23:59'),
(4, 'Biscuts2', 'Famous brand', '2024-07-25 08:43:11', '2024-07-25 08:43:11');

-- --------------------------------------------------------

--
-- Table structure for table `involvement`
--

CREATE TABLE `involvement` (
  `Involvement_ID` int(11) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `involvement`
--

INSERT INTO `involvement` (`Involvement_ID`, `Image`, `Title`, `Description`) VALUES
(1, 'image_1721168466968.jpg', 'dfjkadjl alkdjl;', 'adkfj;lakdj adlk'),
(2, 'image_1721168572838.jpg', 'Nahom', 'Nahom Esayas'),
(3, 'image_1721168665240.jpg', 'ajdlkfj', 'adkjf;ls lakjdf;lakd akl'),
(4, 'image_1721199240413.jpg', 'CSR Achievement', 'Usdk dlksldk, alfdkjs alkdf aiieiueejewjn dlkaj;lka aklfa;lkf alfka;lfkjadl;kfjlfjladjad aaa;lkj afalkjdl'),
(5, 'image_1721202578937.jpg', 'Nahommm', 'Esayas kj;lkd ad feoiauoieuwq aslkfd feoiopaifjd eja;lk oieoqi djalskj'),
(6, 'image_1721203801476.jpg', 'Nahom Esayas', 'dsfsdfdf fdfsf af erewr ewre uui'),
(7, 'image_1721203982223.jpg', 'klkjd slkdlksaiejs lskjdlke alkd', 'eiuowiue aiewo eoie aklald;s eoiw skd'),
(8, 'image_1721206330152.jpg', 'dneehr', 'dhs ske alkdj k 8euowe lk a;lkfad');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `quantity` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `total_price`, `status`, `created_at`, `updated_at`, `quantity`) VALUES
(1, 10, 0.00, 'pending', '2024-07-25 09:53:29', '2024-07-25 09:53:29', '4'),
(2, 10, 0.00, 'pending', '2024-07-25 09:53:54', '2024-07-25 09:53:54', '4');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `ref_num` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT 'pending',
  `Created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `user_id`, `total_price`, `ref_num`, `status`, `Created_at`) VALUES
(1, 13, 2000, '123456', 'pending', '2024-08-04 18:57:34'),
(2, 13, 500, 'tx9480923238092', 'approved', '2024-08-05 09:42:45'),
(3, 13, 1300, 'rr435344re', 'approved', '2024-08-05 11:03:15');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `quality` varchar(255) DEFAULT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `shop_id` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category_id`, `image_url`, `created_at`, `updated_at`, `quality`, `Location`, `shop_id`) VALUES
(3, 'oneKoo coffee', 'Best coffee in the country', 2000.00, 1, 'image_1721717266192.jpg', '2024-07-23 06:47:46', '2024-07-31 23:54:00', 'A', 'Addis Ababa', 1),
(4, 'Addis buna', 'Best coffee in the country', 1000.00, 1, 'image_1721717294517.jpg', '2024-07-23 06:48:14', '2024-07-31 23:54:13', 'A', 'Addis Ababa', 1),
(13, 'cookies', 'Best coffee in the country', 500.00, 1, 'image_1721879423291.jpg', '2024-07-23 06:56:42', '2024-07-31 23:54:27', 'A', 'Addis Ababa', 1),
(14, 'cookies2', 'Best coffee in the country', 500.00, 2, 'image_1721717817381.jpg', '2024-07-23 06:56:57', '2024-07-31 23:54:41', NULL, NULL, 1),
(15, 'cookies3', 'Best cookiee in the country', 600.00, 2, 'image_1721717840960.jpg', '2024-07-23 06:57:21', '2024-07-31 23:54:53', NULL, NULL, 1),
(16, 'cookies3', 'Best cookiee in the country', 600.00, 2, 'image_1721717844539.jpg', '2024-07-23 06:57:24', '2024-07-31 23:55:05', NULL, NULL, 1),
(29, 'cookie33', 'best coffee', 200.00, 2, NULL, '2024-08-01 09:04:25', '2024-08-05 06:52:59', 'A', 'Addis Ababa', 2),
(31, 'Biscuts2', 'Best Biscuit', 100.00, 4, 'image_1722940970664.jpg', '2024-08-06 10:42:50', '2024-08-06 10:42:50', 'A', 'Addis Ababa', 2);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `comment` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `acc_num` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`id`, `name`, `location`, `image`, `email`, `phone`, `bank_name`, `acc_num`) VALUES
(1, 'sarbet-branch', 'Sarbet', '', NULL, NULL, NULL, NULL),
(2, 'Lideta-branch', 'Lideta', 'image_1722635676031.jpg', 'onekoo-lideta@gmail.com', '+251923412356', 'Birhan Bank', '4398294303');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `address`, `created_at`, `updated_at`) VALUES
(1, 'somebody', 'test2@example.com', 'passghg@1^^', '+25173923032', '2024-07-03 11:56:00', '2024-07-22 08:18:03'),
(2, 'someonee3', 'nahom8@gmail.com', 'Therste12ew2', '+25190432133', '2024-07-17 10:01:57', '2024-07-25 02:57:15'),
(3, 'nahomesayas', 'nahomesay43@gmail.com', '$2a$10$khMoglGMOBZp0tv/237LkeXOBcmIFLeFeGbzERF88jFLtnIQilg7y', 'Nahonet', '2024-07-23 20:55:29', '2024-07-23 20:55:29'),
(4, 'nahomesayas', 'nahomes43@gmail.com', '$2a$10$mJiimMUE7nJBFytqZTPxpeLKhJxFC23FGXVkvQ8Cyx8c7nyrc/XzK', 'Nahonet', '2024-07-23 20:57:16', '2024-07-23 20:57:16'),
(5, 'nahomesayas', 'nahesay43@gmail.com', '$2a$10$FfD6ye1fbT6tS0rSl78nEebu8wQdnj9TX9uw/TLboC1nD.NE26Gcq', 'Nahonet', '2024-07-23 20:57:53', '2024-07-23 20:57:53'),
(6, 'nahomesayas', 'naheay43@gmail.com', '$2a$10$LkoP6Afel04LHypW.D7/Cu8xhRq2LMD1GfQxMHlWhNdQhoYDZPLkS', 'Nahonet', '2024-07-23 20:59:37', '2024-07-23 20:59:37'),
(7, 'Nahom Esayas', 'nahomesayas3@gmail.com', '$2a$10$nhMogcE0dOSFZC2drsdxr.c207yKa7D6kVoGt2bV0oIZTxiIKGqFi', 'Nahonet', '2024-07-23 21:01:00', '2024-07-23 21:01:00'),
(8, 'askkd', 'djjdl@gmail.com', '$2a$10$xR3g//h7GQweKGGbUgMareE1DRW3xDKYrzbHtyGWijpchFeBHgAye', '+251974523456', '2024-07-23 21:02:05', '2024-07-23 21:02:05'),
(9, 'nebiyu', 'ndhs@gmail.com', '$2a$10$1pVC6uvpFbk.bpinY8N3luYc3fu5CFrmeu2iL0VJTFilWbD217Zpi', '+251234567821', '2024-07-23 21:03:31', '2024-07-23 21:03:31'),
(10, 'Eyob', 'eyob@gmail.com', '$2a$10$NmkS7MBsNwu6XKAcgydN2uwDXQQg3qfLPYqQY5qwzNrKVieqN/9C2', '+251912345678', '2024-07-24 10:44:27', '2024-07-24 10:44:27'),
(11, 'Nahom', 'nahom@123gmail.com', '$2a$10$nJH4kdut/Is5ZqVoox91weaWnEjh83rLoYCdBHkgoBk0yqwRPeSM6', '+251912321343', '2024-07-25 04:15:41', '2024-07-25 04:15:41'),
(12, 'Bereket', 'beki@gmail.com', '$2a$10$/peB35DvV9M/Ma4dph0kROMB3oUqQ8DRxhCee6WMSU3Cj1a.wL8Ge', '+251904561283', '2024-07-25 04:21:04', '2024-07-25 04:21:04'),
(13, 'User', 'User@gmail.com', '$2a$10$j2d.l7oA08LjOwj1qfTTZOlxDQaM5ZifE1Awg01QX9GQkCvpj2pIO', '+251909152435', '2024-07-25 10:04:06', '2024-07-25 10:04:06'),
(14, 'Admin', 'Admin1@gmail.com', '$2a$10$tEFk.3JrCTjZJsOPsznawOTEgCB.JDFsETEk7KsGIj544lWPxfpR6', '+251901234512', '2024-07-25 10:30:48', '2024-07-25 10:30:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `achievement`
--
ALTER TABLE `achievement`
  ADD PRIMARY KEY (`Achievement_ID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `involvement`
--
ALTER TABLE `involvement`
  ADD PRIMARY KEY (`Involvement_ID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `shop_id` (`shop_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `achievement`
--
ALTER TABLE `achievement`
  MODIFY `Achievement_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `involvement`
--
ALTER TABLE `involvement`
  MODIFY `Involvement_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
