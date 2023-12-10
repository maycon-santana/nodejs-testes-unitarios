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

    it('Deve lança erro ao finalizar compra com carrinho vazio', () => {
        
        function englobaErroCarrinho() {
            const carrinho = new Carrinho();
            carrinho.finalizaCompra();
        }

        expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
    });

    it('Deve adicionar o frete', () => {
        const carrinho = new Carrinho();
        carrinho.adicionaFrete(10);
        expect(carrinho.frete).toBe(10);
    });

    it('Deve finalizar as compras', () => {
        const item = new Item('Banana', 2, 5);
        const item2 = new Item('Abacaxi', 1, 5);
        const item3 = new Item('Maça', 2, 4);
        
        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adiciona(item3);
        carrinho.adicionaFrete(10);

        expect(carrinho.finalizaCompra()).toStrictEqual({
            subtotal: 23,
            frete: 10,
            total: 33
        })
    });

    it('Deve calcular o valot total', () => {
        const item = new Item('Banana', 2, 5);
        const item2 = new Item('Abacaxi', 1, 5);
        const item3 = new Item('Maça', 2, 4);
        
        const carrinho = new Carrinho();
        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adiciona(item3);
        carrinho.adicionaFrete(10);

        const resultadoCalculo = carrinho.calculaTotal();
        expect(resultadoCalculo).toEqual (33);
    });

});