export default interface Sabor {
    id_produto: number;
    sabor: string;
    descricao: string;
    preco: number;
    foto: string;
    quantidade: number; // Adiciona quantidade como opcional
}