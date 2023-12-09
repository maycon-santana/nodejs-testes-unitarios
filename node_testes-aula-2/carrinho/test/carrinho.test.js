import Carrinho from '../carrinho';
import Item from '../item'; 

describe('Testes do carrinho', () => {
    it('Deve inicializar vazio', () => {
        const carrinho = new Carrinho();
        expect(carrinho.subtotal).toBeNull();       
    });

    it('Deve ter itens', () => {
        const item = new Item('Banana', 2, 5);
        const item2 = new Item('Maça', 0.5, 1);
               
        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe('object');
        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);

        expect(carrinho.itens).toContain(item);
        expect(carrinho.itens).toContain(item2);
    });

    it('Deve ter a propriedade itens na inicialização', () => {
        const carrinho = new Carrinho();
        
        expect(carrinho).toHaveProperty('itens');       
    });

    it('Deve ter a propriedade subtotal na inicialização', () => {
        const carrinho = new Carrinho();
        
        expect(carrinho).toHaveProperty('subtotal');       
    });

    it('Deve ter a propriedade frete na inicialização', () => {
        const carrinho = new Carrinho();
        
        expect(carrinho).toHaveProperty('frete');       
    });

    it('Deve ter a propriedade total na inicialização', () => {
        const carrinho = new Carrinho();
        
        expect(carrinho).toHaveProperty('total');       
    });
});