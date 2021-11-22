-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2021 a las 17:14:40
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pablorex`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_cli` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `propiedad` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cli`, `nombre`, `propiedad`, `email`, `telefono`) VALUES
(1, 'Pablo', 1, 'prex@arnet.com.ar', 156500509);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_propiedad`
--

CREATE TABLE `estado_propiedad` (
  `id_tipo` int(11) NOT NULL,
  `tipo_prop` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estado_propiedad`
--

INSERT INTO `estado_propiedad` (`id_tipo`, `tipo_prop`) VALUES
(1, 'Alquilada'),
(2, 'Vendida'),
(3, 'Reservada'),
(4, 'Disponible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

CREATE TABLE `galeria` (
  `id` int(11) NOT NULL,
  `url` varchar(100) NOT NULL,
  `keygal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `galeria`
--

INSERT INTO `galeria` (`id`, `url`, `keygal`) VALUES
(11, 'https://res.cloudinary.com/student-arg21/image/upload/v1637510687/janrg17oglsjsk9kkcg3.jpg', 11),
(11, 'https://res.cloudinary.com/student-arg21/image/upload/v1637511223/miifzc6wtbqbuxafsdql.jpg', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `log`
--

CREATE TABLE `log` (
  `id_log` int(11) NOT NULL,
  `prop` int(11) NOT NULL,
  `accion` varchar(200) NOT NULL,
  `fecha_modify` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propiedades`
--

CREATE TABLE `propiedades` (
  `id` int(11) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `dormi` int(2) NOT NULL,
  `precio` int(7) NOT NULL,
  `supcub` int(4) NOT NULL,
  `suptot` int(4) NOT NULL,
  `estado_inm` varchar(11) NOT NULL,
  `dueño` int(2) NOT NULL,
  `descripcion` varchar(350) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `propiedades`
--

INSERT INTO `propiedades` (`id`, `imagen`, `dormi`, `precio`, `supcub`, `suptot`, `estado_inm`, `dueño`, `descripcion`) VALUES
(6, 'https://res.cloudinary.com/student-arg21/image/upload/v1637510538/ylipcssdftkjmwrjuzdu.jpg', 3, 44500, 89, 121, 'Venta', 0, 'Casa muy comoda y funcional'),
(8, '', 4, 120000, 150, 400, 'Venta', 0, 'Casa ubicada en barrio Cerro de las Rosas con Pileta'),
(9, '', 4, 250000, 150, 300, 'Venta', 0, 'Complejo de cabañas en Villa Carlos Paz'),
(10, '', 3, 180000, 185, 350, 'Venta', 0, 'Casa para una familia numerosa con pileta y patio'),
(11, '', 3, 125000, 134, 600, 'Alquiler', 0, 'Casa con Pileta en las sierras'),
(12, '', 4, 150000, 140, 550, 'Venta', 0, 'Casa en Villa Allende'),
(18, 'https://res.cloudinary.com/student-arg21/image/upload/v1637510596/ctbwfjeet21irngmppsr.jpg', 3, 45000, 120, 180, 'Alquiler', 0, 'Casa muy comoda y funcional');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscripciones`
--

CREATE TABLE `suscripciones` (
  `id` int(11) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_propiedad`
--

CREATE TABLE `tipo_propiedad` (
  `id_tipo` int(11) NOT NULL,
  `tipo_prop` varchar(30) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_propiedad`
--

INSERT INTO `tipo_propiedad` (`id_tipo`, `tipo_prop`, `estado`) VALUES
(1, 'Alquiler', 1),
(2, 'Venta', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_user`
--

CREATE TABLE `tipo_user` (
  `id_tipo_user` int(7) NOT NULL,
  `tipo_user` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `user` varchar(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pass` varchar(300) NOT NULL,
  `id` int(7) NOT NULL,
  `roll` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`user`, `name`, `pass`, `id`, `roll`) VALUES
('prueba', 'usuario de prueba', '12345', 8, 'Admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cli`),
  ADD KEY `clientes_ibfk_1` (`propiedad`);

--
-- Indices de la tabla `estado_propiedad`
--
ALTER TABLE `estado_propiedad`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Indices de la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD PRIMARY KEY (`keygal`);

--
-- Indices de la tabla `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id_log`);

--
-- Indices de la tabla `propiedades`
--
ALTER TABLE `propiedades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Estado` (`estado_inm`);

--
-- Indices de la tabla `suscripciones`
--
ALTER TABLE `suscripciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_propiedad`
--
ALTER TABLE `tipo_propiedad`
  ADD PRIMARY KEY (`id_tipo`),
  ADD KEY `estado` (`estado`);

--
-- Indices de la tabla `tipo_user`
--
ALTER TABLE `tipo_user`
  ADD PRIMARY KEY (`id_tipo_user`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cli` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `estado_propiedad`
--
ALTER TABLE `estado_propiedad`
  MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `galeria`
--
ALTER TABLE `galeria`
  MODIFY `keygal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `log`
--
ALTER TABLE `log`
  MODIFY `id_log` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `propiedades`
--
ALTER TABLE `propiedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `suscripciones`
--
ALTER TABLE `suscripciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_propiedad`
--
ALTER TABLE `tipo_propiedad`
  MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_user`
--
ALTER TABLE `tipo_user`
  MODIFY `id_tipo_user` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tipo_user`
--
ALTER TABLE `tipo_user`
  ADD CONSTRAINT `tipo_user_ibfk_1` FOREIGN KEY (`id_tipo_user`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
