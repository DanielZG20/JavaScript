# Calculadora simples com HTML,CSS & JS

## Com operações aritméticas básicas

#### Bom o código é bem simples e limpo

Iniciamos o código *_Javascript_* com um **array** com o nome de **numbers** que serão armazenados todos os números que o usuário clicou na nossa calculadora, em seguida temos uma outra *váriavel* com o nome de **result** que guardará todo o nosso resultado das operações aritméticas e por fim uma outra *váriavel* com o nome de **res** acessando a **`<div>`** que está vazia, ela será a div que colocaremos a resposta do calculo.

A primeira função chamada de **insertValue**, com o paramêtro value, que recebe o **`onclick=(value)`**, esse **value** é o próprio valor do número ou do operador aritmético que o usuário clicou, com isso em mente a função colocará os valores que o usuário clicou na nossa calculadora na váriavel **numbers** 
(OBS: Ela está concatenando todos os valores no array ou seja, o array ficará desta forma **numbers**: [123] e não **numbers**: [1,2,3] ou seja tudo está ligado a uma única posição no nosso vetor e não pra cada valor uma posição do nosso vetor.)
Após a concatenação a função escreverá na tela dentro da nossa div **`<div`** , com o id **res**.

A segunda função chamada de **reset** ela resetará a váriavel **numbers** e a nossa **`<div>`** deixará sem os dados inserida nela.

A terceira e função chamada de **calc** acontecerá um **`if`** verificando se a váriavel **result** está vazia **SE SIM**, **ENTÃO** a váriavel **result** receberá a função **`eval`** do próprio *_Javascript_* passando como paramêtro a nossa váriavel **numbers** o *_Javascript_* fará a operação e enviará o resultado para a nossa váriavel **result** com isso colocamos dentro da nossa **`<div`>** **res** a váriavel **result**. se nossa váriavel **result** estiver com algum valor dentro acontecerá o else, e ficará o sempre nele até que o usuário clique em DEL, para limpar as nossas váriaveis voltando prá lógica: **SE NÃO**, **ENTÃO** a váriavel **result** também fará a mesma conta que fizemos no **`if`** chamamos a função **`eval`** e passamos como paramêtros a nossa variável **numbers** porém, agora a nossa váriavel **numbers** vai receber a váriavel **result** e escreveremos na nossa **`<div>`** **res** a váriavel **numbers** com o valor atualizado.

Esta forma do **`if`** e **`else`** pode parecer um pouco confuso no começo, mas se não usarmos a nossa **`<div>`** **res** sempre vai mostrar por exemplo: (5+5+3+2) e funcionará a conta, vai ser feita porém, ficará muito 'suja' nossa tela, fazendo aquela condição, resetaremos essa nossa **`<div>`** passando só os novos valores ou seja ao invés de ficar (5+5+3+2) ficará (5+5 = 10) e dps que fazer +3, não ficará (5+5+3) ficará (10+3) e assim por diante.

Espero ter ajudado de alguma forma até a próxima.

É bem simples o **programa**, mas pode ser de extrema ajuda, obrigado a todos, um **FORTE** **abraço**

### Use a vontade os exercícios para treinar e compreender, vamos interagir !

Me chamo Daniel Zanoni Garcia, sou um dos donos da página [Dev_Hours](https://www.instagram.com/dev_hours) no instagram, apaixonado por novas tecnologias desde sempre, atualmente focado para o desenvolvimento web.

#### Redes sociais

[Linkedin](https://www.linkedin.com/in/daniel-zanoni-garcia)

[GitHub](https://github.com/DanielZG20)

[Dev_Hours](https://www.instagram.com/dev_hours)