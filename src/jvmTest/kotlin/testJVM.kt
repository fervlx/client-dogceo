import com.fervlx.dogceo.DogCeoClient


fun main() {
    val client = DogCeoClient()

    testListAllBreeds( client )

    testImageUrl( client )

    testSubBreeds( client, "wolfhound" )

    testBreedImages( client, "terrier")

    client.disconnect()
}

fun testListAllBreeds( client: DogCeoClient ) {

    client.listAllBreeds { list ->
        printOutput("Razas encontradas") {
            list?.forEach { item ->
                println("Raza : ${ item.breed }, sub razas : ${item.subBreeds}")
            }
        }
    }
}

fun testSubBreeds( client: DogCeoClient, breed: String ) {

    client.listSubBreeds( breed ) { subbreed ->
        printOutput("Subraza de $breed") {
            println("${subbreed?.subBreeds}")
        }
    }
}

fun testImageUrl( client: DogCeoClient ) {

    client.imageRandom { url ->
        printOutput( "Url de imagen") {
            println( url )
        }
    }
}

fun testBreedImages( client: DogCeoClient, breed: String ) {

    client.breedImages( breed ) { list ->
        printOutput("Imagenes de la raza: $breed") {
            list?.forEach { item -> println(item) }
        }
    }
}

fun printOutput( message: String, block : () -> Unit ) {
    println(message)
    block()
}