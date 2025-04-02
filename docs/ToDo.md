# Podcast Manager

### Descrição 
Um app ao estilo netflix, aonde eu possa centralizar diferentes episódios de podcasts separados por categorias

### Domínio 
Podcasts feitos em video

### Features
- Listar os episódios de podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor, etc]
- Filtrar episodios por nome do podcast

## Como

#### Feature:
Listar os episódios de podcasts em sessões de categorias

### Como vou implementar
Vou retornar em uma api rest (json) o nome do poscast, nome do episódio, imagem de capa, link do video categoria
```js
[
{
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "bodybuilder", "esporte"]
},
{
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I"
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"]
},
]
```