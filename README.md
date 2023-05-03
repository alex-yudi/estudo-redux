Partes importantes do redux:

- Store
     Responsável por armazenar os dados que serão utilizados no projeto (Por recomendação, deve-se ter apenas UM deles por projeto). Se comparado com a API de Contexto, seria o local onde os states ficam armazenados.

- Provider
    Será responsável por disponibilizar os dados da store, ele que sinaliza os locais que terão acesso.

- Reducer / Slice
    Encarregado de lidar/processar todas as ações que podem ser realizadas com um determinado dado da store. Idealmente cada dado deve ser seu próprio reducer.

- Actions / Dispatch
    São as ações específicas que podem ser realizadas, por exemplo, uma "action de trocar nome".
    Obs.: As actions em si não fazem NADA além de mandar o dado para o reducer.

- Selector
    Responsável por pegar os dados que estão na store.

---------

Criando o Redux:
OBS.: É necessário instalar o `redux, react-redux e @reduxjs/toolkit`
    - Dentro do `/src`, deve-se criar um arquivo `redux`
    - Dentro da pasta `redux`, crio uma pasta com o nome `reducers` que será responsável por armazenar os reducers do projeto

    Para criar o reducer, será necessário:
        - Importar o `createSlice` do @reduxjs/toolkit
        - Instanciar essa importação
            Ex.: const slice = createSlice()
        - Nesse instânciamento, dentro dele será necessário passar um objeto, que conterá as informações: `name`, `initialState`, `reducers`
        - Após a criação desse instânciamento, devo fazer a exportação default do reducer dele (export default slice.reducer)
        -Também faço a exportação dos actions que eu desejar (export const {} = slice.actions)
    
    Criando a Store:
        - Dentro da pasta `redux`, devo criar um arquivo com o nome `store` (o formato pode ser o js ou ts)
        - No arquivo, devo fazer a importação do `configureStore` do `@reduxjs/toolkit`
        - Após isso, devo fazer o instânciamento dessa `configure`
        - Dentro dele, devo colocar um objeto com a propriedade `reducer` que, dentro dele, será outro objeto com todos os reducers que existirem no projeto (uso a propriedade, dando o nome dele e coloco o reducer nele). Será necessário fazer a importação do reducer no arquivo.
            Obs.: Existe um detalhe de exportação de tipos, caso o Typescript esteja sendo utilizado, está adicionado o código no store desse repositório, com a explicação.
    
    Criando o Provider:
        - Após a criação da store, deve-se ir no index do projeto
        - importar o `Provider` do `react-redux` e o import do `store`
        - Após isso, devo "encapsular" a <Main> no <Provider>
        - O <Provider> terá uma props `store` que recebe a própria store importada
            <Provider store={store}>
    
Utilizando os dados do Reducer
    No react-redux existe um hook para pegar as informações do reducer (useSelector)
    Será necessário a importação desse hook nos locais que eu desejar ter acesso a alguma informação.
    - Após a importação, dentro do component, devo utilizar o `useSelector`, ele recebe uma callback que recebe como parâmetro um `state` e vai retornar o reducer que eu desejar.
    - Depois de fazer esse processo, basta utilizar o acesso da variável que eu tiver declarado que ela vai possuir os dados que eu desejava.

Alterando os dados do Reducer
    para fazer isso, será necessário a importação do `useDispatch` do `react-redux`
    - O `useDispatch` deve ser instânciado, para ser utilizado como função ao longo dos locais desejados.
    - Também será necessário fazer o import das actions existentes no reducer(lembrar que elas ficam marcadas para exportação, dentro do arquivo do reducer)
    - O `dispatch` será uma função que recebe uma callback, sendo essa callback a action que eu desejar/tiver feito a importação.