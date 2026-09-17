/*A*/
SELECT
*
FROM pessoa
JOIN endereco
ON pessoa.nome = endereco.logradouro;    

/*B*/
UPDATE pessoa SET
renda = 20
WHERE idpessoa = 27;

/*C*/
UPDATE endereco SET
bairro = 'Maracaju'
WHERE idendereco = 2;

/*D*/
SELECT * FROM pessoa ORDER BY nome DESC;

/*E*/

	