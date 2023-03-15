--Cenário 1
SELECT * 
FROM test_users u
INNER JOIN test_address a ON u.id = a.user_id
WHERE a.address LIKE '%São Paulo%'

--Cenário 2
UPDATE test_users
SET email = "novoemail@email.com"
WHERE id = '1'

--Cenário 3
DELETE u.* FROM test_users u
INNER JOIN test_address a ON u.id = a.user_id
WHERE a.address IS NULL
OR a.address = ''

--Cenário 4
SELECT AVG(TIMESTAMPDIFF (YEAR, birth_date, CURDATE()))
FROM test_users
WHERE TIMESTAMPDIFF (YEAR, birth_date, CURDATE()) >= 18