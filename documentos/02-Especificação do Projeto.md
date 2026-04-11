# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Nome </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa portadora de alguma deficiência.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1.Precisa identificar de maneira fácil e rápida, locais que possuem acessibilidade.
  
2.Realizar denúncias de irregularidades diretamente no órgão regulatório.
  
3.O sistema permite a segmentação de estabelecimentos por cidade, integrando filtros personalizados que detalham os recursos de inclusão disponíveis, como rotas acessíveis, sinalização tátil, mobiliário adequado e suporte para pessoas com deficiência auditiva ou visual.

4.Saber se o estabelecimento possui funcionários treinados em Libras ou capacitados para auxílio à locomoção/orientação de pessoas cegas.
  
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
                          
| Deficiente | ter informações de acessibilidade em eventos | aproveitar momentos de lazer.                              
| Deficiente | consultar informações sobre locais públicos e privados | evitar situações constrangedoras e de risco.
| Deficiente | consultar locais com denúncias de falta de acessibilidade | saber se conseguirá acessar o local com segurança.
| Deficiente | poder denunciar às autoridades competentes locais sem acessibilidade | cobrar melhorias e recursos acessíveis.

## Requisitos do Projeto


### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  A aplicação deve oferecer funcionalidade como avaliação por estrelas  e uso de tags, permitindo que o usuário classifique o local de forma positiva ou negativa quanto à acessibilidade ou relate eventuais problemas.  | ALTA 
| RF-02 |  A aplicação deve permitir que usuários interessados em reportar  irregularidades ou falhas de acessibilidade sejam direcionados ao site oficial do Fala.br,facilitando assim o envio de denúncias aos órgãos governamentais competentes. | MÉDIA |
| RF-03 |  A aplicação deve possibilitar pesquisa para que o usuário possa buscar os locais mais bem avaliados por categoria.| ALTA
| RF-04 |  Deve ter uma aba de notícias onde estão dispostas informações como últimas notícias e anúncios de eventos alertas contendo as informações de acessibilidade.| MÉDIA 
| RF-05 |  A aplicação exige  que usuário esteja cadastrado e logado em sua conta para poder acessar todas as funcionalidades do sistema, como explorar conteúdos, realizar avaliações, fazer denúncias e efetuar pesquisas.| ALTA

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  A aplicação deve ser responsiva, adaptando-se a diferentes tamanhos de telas, incluindo mobile e desktop.|ALTA|
| RNF-01 |  O método de armazenamento de dados deverá ser o LocalStorage |ALTA|



