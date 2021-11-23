-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2021 a las 03:35:38
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
(11, 'https://res.cloudinary.com/student-arg21/image/upload/v1637511223/miifzc6wtbqbuxafsdql.jpg', 12),
(6, 'https://res.cloudinary.com/student-arg21/image/upload/v1637555721/l2rujptfey6z7gjquuru.jpg', 13),
(6, 'https://res.cloudinary.com/student-arg21/image/upload/v1637555731/bshp64xog1ly0opetyfi.jpg', 14),
(6, 'https://res.cloudinary.com/student-arg21/image/upload/v1637555741/cmng94kgzhx08fod8lgh.jpg', 15),
(6, 'https://res.cloudinary.com/student-arg21/image/upload/v1637555752/pulpbjivtsvnhdl5ezqn.jpg', 16),
(6, 'https://res.cloudinary.com/student-arg21/image/upload/v1637555761/urzq4w9orlrfz8mtallg.jpg', 17),
(6, 'https://res.cloudinary.com/student-arg21/image/upload/v1637555778/uygjkjyymms4j0ch9sp9.jpg', 18),
(11, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634303/byckkvd4rsazk2lu8mst.jpg', 19),
(11, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634314/j9ynxgh9akoh1a8prmo3.jpg', 20),
(11, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634325/sjus8uzje2vnxdnxz1rq.jpg', 21),
(18, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634371/pyrdoizrcdxa9c78pbro.jpg', 22),
(18, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634395/s23t9qn60va4ex0jjaan.jpg', 23),
(18, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634403/zewiofybrgjqkwdaqhw2.jpg', 24),
(18, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634411/lrzfoqjp7diaijibfynt.jpg', 25),
(18, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634421/jnr292wvtmvzb9flnmya.jpg', 26),
(8, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634479/vwwyh0z6alecedmfdvww.jpg', 27),
(8, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634488/zpfjjx7njwbjl0qzxa6p.jpg', 28),
(8, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634495/idwhdtyxsskynu5ygw70.jpg', 29),
(8, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634503/aznx9kszxheutm49gywj.jpg', 30),
(9, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634565/rz9grd8qc1cdaoxpdjl9.jpg', 31),
(9, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634581/eebfocrldizq4rk92ird.jpg', 32),
(9, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634590/ilvevhzjlveie0cd940n.jpg', 33),
(9, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634597/zsdxlhyucv25jbvypwzw.jpg', 34),
(9, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634605/q9xcndfl8mrajhyiewzp.jpg', 35),
(9, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634618/vfawyen2j39zryneipiu.jpg', 36),
(9, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634627/paamg6kbpe483ukm635c.jpg', 37),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634676/mho9f35pwlhuja3t4oco.jpg', 38),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634690/qut8ztis1tm2tvhtxsjm.jpg', 39),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634697/zrw9sowykbtsgoihf0ns.jpg', 40),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634703/f5otn1kxc9l1d8kgfeip.jpg', 41),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634710/ibspshdtj2omlildr17p.jpg', 42),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634718/lnfqbwvabv98iuoqhkmp.jpg', 43),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634726/ouie8jja6e8qfdlndukg.jpg', 44),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634735/zgcr1usgcip2whpon6dg.jpg', 45),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634764/ioezr1s79g3zre3k9sxx.jpg', 46),
(12, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634826/gdcut25e0xysbqtvjf9s.jpg', 47),
(12, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634837/tdbkft5rd8wdgwvbz8jo.jpg', 48),
(12, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634843/nngy8uypwunpqqxabdej.jpg', 49),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634857/id9gifx5mcqj5xyt9kwq.jpg', 51),
(12, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634873/bpktxliketkpsldyqulm.jpg', 52),
(12, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634883/euxcqhtvhexm7qxomg6p.jpg', 53),
(12, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634890/h02tn3wuaezftly9ahnw.jpg', 54);

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
(8, 'https://res.cloudinary.com/student-arg21/image/upload/v1637555516/pwt8vvjmuhef1endxtt8.jpg', 4, 120000, 150, 400, 'Venta', 0, 'Casa ubicada en barrio Cerro de las Rosas con Pileta'),
(9, 'https://res.cloudinary.com/student-arg21/image/upload/v1637555542/s7u2pgiiwwztyrjttqav.jpg', 4, 250000, 150, 300, 'Venta', 0, 'Complejo de cabañas en Villa Carlos Paz'),
(10, 'https://res.cloudinary.com/student-arg21/image/upload/v1637634788/xhlbx4twnxymmsqk8zo9.jpg', 3, 180000, 185, 350, 'Venta', 0, 'Casa para una familia numerosa con pileta y patio'),
(11, 'https://res.cloudinary.com/student-arg21/image/upload/v1637555574/qdeqwsxluvuja5royq9w.jpg', 3, 125000, 134, 600, 'Alquiler', 0, 'Galpon'),
(12, 'https://res.cloudinary.com/student-arg21/image/upload/v1637555598/sx1o5ot5mnfka2hsmfap.jpg', 4, 150000, 140, 550, 'Venta', 0, 'Casa en Villa Allende'),
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
  `id` int(11) NOT NULL,
  `user` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `name`, `pass`, `rol`) VALUES
(2, 'admin', 'Administrador', '$2a$08$sYLTr7hDJDUFuk/LY0nHVOXXyKyRvR0SccKe81k094r9L5dbIBbua', 'admin');

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
  MODIFY `keygal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
