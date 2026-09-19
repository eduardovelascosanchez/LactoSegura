# LactoSegura
Aplicación educativa sobre lactancia y medicamentos

## Contenido del repositorio

| Archivo | Qué es |
|---|---|
| `index.html` | La app LactoSegura: buscador de compatibilidad de medicamentos, plantas y homeopatía con la lactancia. |
| `centro.html` | Landing page del centro pediátrico. |
| `centro-contenido.js` | Todo el texto y las secciones de la landing. **Este es el archivo que se edita.** |
| `sw.js`, `manifest.json`, `icon-*.png` | Service worker e iconos de la app instalable (PWA). |

## Landing del centro pediátrico

`centro.html` se arma sola a partir del array `SECCIONES` de `centro-contenido.js`.
El orden del array es el orden en que las secciones aparecen en la página.

### Agregar una sección

1. Abre `centro-contenido.js`.
2. Copia una de las plantillas que están al final del archivo.
3. Pégala dentro de `SECCIONES`, en la posición donde la quieras.
4. Ponle un `id` único (sin espacios ni acentos) y guarda.

```js
{
  tipo: "tarjetas",          // el diseño que se usa
  id: "talleres",            // ancla única, ej: #talleres
  nav: "Talleres",           // opcional: si lo pones, sale en el menú y en el pie
  fondo: "crema",            // opcional: crema | blanco | rosa | menta
  kicker: "Para las familias",
  titulo: "Talleres del centro",
  intro: "Sesiones mensuales para papás y mamás.",
  items: [
    { icono: "familia", titulo: "Papás primerizos", texto: "Lactancia, sueño seguro y señales de alarma." }
  ]
}
```

### Tipos de sección disponibles

`hero` (portada) · `tarjetas` (rejilla con icono) · `edades` (etapas con etiqueta) ·
`perfil` (semblanza + credenciales) · `pasos` (numerados) · `lista` (puntos, con tono
normal o de alerta) · `horarios` (horario + ubicación) · `testimonios` · `faq`
(acordeón) · `cta` (llamado a la acción) · `contacto` · `texto` (HTML libre) · `aviso`.

Los datos generales del centro (nombre, teléfono, correo, dirección, botón del menú)
están en el objeto `SITIO`, arriba del mismo archivo.

No hace falta tocar `centro.html`: ahí solo vive el diseño y el motor que dibuja las
secciones. Solo se edita si quieres crear un **tipo** de sección nuevo, agregando una
función al objeto `DIBUJA`.
