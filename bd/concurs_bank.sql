-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Tempo de geração: 02-Jun-2025 às 04:12
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `concurs_bank`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `estudante`
--

CREATE TABLE `estudante` (
  `cpf` varchar(14) NOT NULL,
  `nome_completo` varchar(100) NOT NULL,
  `idade` int(11) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `estudante`
--

INSERT INTO `estudante` (`cpf`, `nome_completo`, `idade`, `sexo`, `email`, `senha`) VALUES
('888.888.888-88', 'flavia alves de melo', 21, 'Feminino', 'flaviaalves@gmail.com', '$2y$10$dVyhx5K9VYFD2hQqX/Zyxu8zMbfpPS5kcdNTrqknqOocVun3kw4sS'),
('999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 18, 'Masculino', 'hermesonalessandro326@gmail.com', '$2y$10$e85Fei8qe6DJFbnbEkRaMurYHg4EyFKWD74o4.TMGtBOy.lUQ4aK6');

-- --------------------------------------------------------

--
-- Estrutura da tabela `resultado`
--

CREATE TABLE `resultado` (
  `id` int(11) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `nome_completo` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `assunto` varchar(100) NOT NULL,
  `porcentagem` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `resultado`
--

INSERT INTO `resultado` (`id`, `cpf`, `nome_completo`, `email`, `assunto`, `porcentagem`) VALUES
(17, '999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 'hermesonalessandro326@gmail.com', 'Banco de dados', 20.00),
(18, '999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 'hermesonalessandro326@gmail.com', 'Redes de computadores', 30.00),
(19, '999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 'hermesonalessandro326@gmail.com', 'Desenvolvimento de software', 20.00),
(20, '999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 'hermesonalessandro326@gmail.com', 'Segurança da informação', 10.00),
(21, '999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 'hermesonalessandro326@gmail.com', 'Sistemas operacionais', 30.00),
(22, '999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 'hermesonalessandro326@gmail.com', 'Governança de TI', 20.00),
(23, '999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 'hermesonalessandro326@gmail.com', 'Ia e big data', 20.00),
(24, '999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 'hermesonalessandro326@gmail.com', 'Computação em nuvem', 10.00),
(25, '999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 'hermesonalessandro326@gmail.com', 'Pacote office', 30.00),
(26, '999.999.999-99', 'Hermeson Alessandro Melo de Sousa', 'hermesonalessandro326@gmail.com', 'Internet das coisas e blockchain', 30.00),
(27, '888.888.888-88', 'flavia alves de melo', 'flaviaalves@gmail.com', 'Banco de dados', 10.00);

-- --------------------------------------------------------

--
-- Estrutura da tabela `sessao`
--

CREATE TABLE `sessao` (
  `id` bigint(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `sessao`
--

INSERT INTO `sessao` (`id`, `email`, `senha`) VALUES
(57, 'flaviaalves@gmail.com', '$2y$10$6wJsP8amAhAj9k95Zf7t4es09EdEX5MuWinEDhRfKSx5r5Tx66JRi');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `estudante`
--
ALTER TABLE `estudante`
  ADD PRIMARY KEY (`cpf`);

--
-- Índices para tabela `resultado`
--
ALTER TABLE `resultado`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `sessao`
--
ALTER TABLE `sessao`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `resultado`
--
ALTER TABLE `resultado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de tabela `sessao`
--
ALTER TABLE `sessao`
  MODIFY `id` bigint(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
