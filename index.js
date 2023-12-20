const readline = require('readline-sync')

function start () {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Digite um termo de busca no Wikipedia: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Quem é', 'O que é', 'A historia da(o)']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma das opções: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(content)
}

start()