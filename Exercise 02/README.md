# Exercício 02 de JavaScript


## Este pequeno exercício verifica a idade da pessoa

#### Bom este pequeno programa
Começa pedindo o ano de nascimento da pessoa, se o usuário tentar calcular deixando em branco, aparecerá um `alert` avisando, que a idade mínima é de 1 ano.

Logo após o usuário inserir dados corretos, o programa verificará se a data de nascimento que o usuário digitou é igual a 0 ou maior que o ano em que vivemos no momento em que a aplicação for executada, **SE sim**, então ele enviará um `alert` avisando pro usuário verificar os dados se estão corretos, **SE não** então a partir daí começa o programa.

Com todos os dados inseridos corretamente, o programa pegará o todos os `<input>` do `type="radio"`, e colocará numa váriavel chamada formSex, e criamos também uma váriavel chamada `gender = ''` e uma outra chamada **age** recebendo a váriavel **year - Number(userYear.value)**, ou seja dentro da váriavel **age**, recebemos o ano atual - o ano que a pessoa digitou através do `<input>`, com isso em mente, também criamos de forma dinamica com o **JavaScript** uma tag **HTML** `<img>` inserindo um `id` chamado `img`.

O **JavaScript** verificará o valor do `<input>` do tipo radio, qual a opção que o usuário marcou se foi a **primeira ou a segunda opção**

Se foi a o usuário marcou a primeira opção a váriavel `gender = 'Male'`, receberá o valor Male e **SE** a idade
