export interface Postagem{
    owner: string, // Apelido de quem publicou a postagem
    img: string,
    description: string,
    date: string,
    likes: string[] // Array de pelidos de todos que curtiram a foto
}