console.log('compr3x.file in your browser')

/* Compreensão de immages é processo de minimizar o tamanho de uma imagem
basicamente vamos fazer a perca de dados na imagem, que pode ser muitas das vezes menos profunda
que só atua em dados menos criticos, e mais profundas como, perca da qualidade de imagem

Então para esse processo concerteza precisamos, reencriar a imagem para uma nova.

1 - Ler a imagem
2 - Efetuar a perca de dados
3 - Reecriar a imagem
*/
function compressImg(image_file){
    console.log(image_file)
    
    const WIDTH = 800
        //pegando a imagem do elemento
        
        //Criando um leitor de dados para ler a imagem
        var reader = new FileReader;
        //Lendo a imagem
        reader.readAsDataURL(image_file);
        // Quando acabar de ler a imagen "OnLoand"
        reader.onload = (event) => {
            console.log(event)
            //O leitor esta lendo a imagem e retorna ela nesse evento
            //Salvarei essa imagem ja conveertida em url bas64 em
            const image_url = event.target.result
            //Criando uma tag no DOM do html para reenderizar na tela a imagem
            image = document.createElement('img');
            //adicionado um caminho ou uma bulshit assim no novo elemento de imagem criado
            image.src = image_url;
            //Quando a imagem for carregada
            image.onload = (e) => {
                //A imagem precisa ser reecriada com novas propriedades, por isso utilizaremos o canvas para cirar uma nova imagem 
                let canvas = document.createElement('canvas')
                //Asseguir redemencionando a imagem
                let ratio = WIDTH / e.target.width
                canvas.width = WIDTH
                canvas.height = e.target.height * ratio
                //Criando um quadro, para redensenhar a imagem
                const context = canvas.getContext('2d')
                //Redesenhando a imagem
                context.drawImage(image, 0, 0, canvas.width, canvas.height)
                //Definindo a qualidade e o formato de ficheiro a ser retornando
                let new_image_url = context.canvas.toDataURL('image/jpeg', 1.0)
                console.log(new_image_url)
                return new_image_url
            }
        }
} 

