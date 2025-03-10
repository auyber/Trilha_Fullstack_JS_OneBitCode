let crew: [string, string, string]

crew[0] = 'Auyber'
crew[1] = 'Genesini'
crew[2] = 'Moura'

// Caso eu queira adicionar um 4 índice, o TS informará o erro, pois a tupla só possui 3 string e não 4

// Outro exemplo pode ser ao usar em um valor prevísivel, por exemplos ponto cartesiano (x e y)

let point: [number, number]

point = [2, 3]

// Caso tente passar outro número, terá um erro

// Usando a desestruturação, podemos fazer o seguinte:

let point: [number, number]

point = [2, 3]

let [x, y] = point