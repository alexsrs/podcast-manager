# Podcast Manager

## Descrição
Um app ao estilo Netflix, onde é possível centralizar diferentes episódios de podcasts separados por categorias.

## Domínio
Podcasts feitos em vídeo.

## Features
- **Listar episódios de podcasts** em sessões de categorias:
  - Exemplos de categorias: saúde, fitness, mentalidade, humor, etc.
- **Filtrar episódios** por nome do podcast.

## Como funciona
O projeto expõe uma API REST que retorna os dados dos podcasts no formato JSON. Cada podcast contém as seguintes informações:
- Nome do podcast.
- Nome do episódio.
- Imagem de capa.
- Link do vídeo.
- Categorias associadas.

### Exemplo de resposta da API
```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "bodybuilder", "esporte"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

## Como executar o projeto

### Pré-requisitos
- Node.js instalado.
- Gerenciador de pacotes npm.

### Passos
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd podcast-manager
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure a porta no arquivo `.env`:
   ```env
   PORT=3636
   ```

4. Execute o servidor em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```

5. Acesse a API nos endpoints:
   - Listar episódios: `GET /api/list`
   - Filtrar episódios: `GET /api/filter?p=<nome-do-podcast>`

## Scripts disponíveis
- `npm run start:dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run start:dist`: Compila o projeto e executa o servidor.
- `npm run start:watch`: Inicia o servidor com hot-reload.

## Estrutura do projeto
```
.env
.gitignore
package.json
tsconfig.json
docs/
    architeture.tldr
    ToDo.md
src/
    app.ts
    server.ts
    controllers/
        podcasts-controller.ts
    models/
        podcast-model.ts
        podcast-transfer-model.ts
    repositories/
        podcasts-repository.ts
        podcasts.json
    routes/
        routes.ts
    services/
        filter-episodes-service.ts
        list-episodes-service.ts
    utils/
        content-type.ts
        http-methods.ts
        status-code.ts
```

## Licença
Este projeto está licenciado sob a licença ISC.
```