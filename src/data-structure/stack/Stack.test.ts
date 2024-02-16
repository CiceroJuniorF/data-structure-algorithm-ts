import Stack from "./Stack"

test("Deve adicionar um item", ()=>{
    const stack:Stack<number> = new Stack<number>();
    const ITEM = 1;
    expect(()=>{stack.push(ITEM)}).not.toThrow()
});

test("Deve retornar o total de items adicionados", ()=>{
    const stack:Stack<number> = new Stack<number>();
    const TOTAL = 10;
    for (let index = 0; index < TOTAL; index++) {
        const ITEM = index;
        stack.push(ITEM);        
    }    
    expect(stack.size()).toEqual(TOTAL)
});

test("Deve informar que está vazio", ()=>{
    const stack:Stack<number> = new Stack<number>(); 
    expect(stack.isEmpty()).toBeTruthy()
});

test("Deve informar que não está vazio", ()=>{
    const stack:Stack<number> = new Stack<number>();
    const ITEM = 1; 
    stack.push(ITEM);
    expect(stack.isEmpty()).toBeFalsy()
});

test("Deve limpar a lista", ()=>{
    const stack:Stack<number> = new Stack<number>();
    const ITEM = 1; 
    stack.push(ITEM);
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy()
});

test("Deve limpar a lista", ()=>{
    const stack:Stack<number> = new Stack<number>();
    const ITEM = 1; 
    stack.push(ITEM);
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy()
});

test("Deve retornar o topo", ()=>{
    const stack:Stack<number> = new Stack<number>();
    const TOTAL = 10;
    for (let index = 0; index < TOTAL; index++) {
        const ITEM = index;
        stack.push(ITEM);        
    }        
    expect(stack.peek()).toEqual(9);
});

test("Deve lançar o erro ao tentar pegar o topo de uma Stack vazia", ()=>{
    const stack:Stack<number> = new Stack<number>();   
    expect(()=>{stack.peek()}).toThrow("Stack is Empty");
});

test("Deve lançar o erro ao tentar pegar o topo de uma Stack vazia", ()=>{
    const stack:Stack<number> = new Stack<number>();   
    expect(()=>{stack.pop()}).toThrow("Stack is Empty");
});

test("Deve retornar remover o e retornar topo", ()=>{
    const stack:Stack<number> = new Stack<number>();
    const TOTAL = 10;
    for (let index = 0; index < TOTAL; index++) {
        const ITEM = index;
        stack.push(ITEM);        
    }        
    expect(stack.pop()).toEqual(9);
    expect(stack.peek()).toEqual(8);
});

