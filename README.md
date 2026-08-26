# CBVEM Website

Sitio multi-pagina de CBVEM con Next.js + React + TypeScript, preparado para desarrollo y build estatico con Docker.

## Stack

- Next.js (App Router)
- React + TypeScript
- Contenido en JSON por pagina e idioma
- Docker + Docker Compose para entorno local
- Export estatico para despliegue posterior en CloudFront

## Estructura de contenido

- `content/es/*.json`
- `content/ca/*.json`
- `content/en/*.json`

Cada pagina usa un JSON independiente:

- `inicio.json`
- `entrenamientos.json`
- `torneos.json`
- `eventos-camps.json`

## Desarrollo con Docker

Levantar entorno local:

```bash
docker compose up cbvem-dev --build
```

Abrir:

- [http://localhost:3000](http://localhost:3000)

## Build estatico con Docker

Generar salida estaticas en `dist/`:

```bash
docker compose run --rm cbvem-build
```

La carpeta `dist/` queda lista para publicar en S3/CloudFront.

## Idiomas

- Idioma por defecto: espanol
- Cambio rapido: `?lang=es`, `?lang=ca`, `?lang=en`
- Ejemplo: `http://localhost:3000/torneos?lang=en`

## Notas

- El formulario es compatible con export estatico: abre cliente de correo via `mailto:`.
- WhatsApp usa enlace directo `wa.me`.
- Actualiza `whatsappPhone` en cada JSON para usar el numero real del club.
