package com.fervlx.dogceo

import kotlinx.coroutines.runBlocking

/*actual class DogCeoClient {

    private val api  = DogceoAPI()

    fun disconnect() {
        api.dispose()
    }

    actual fun listAllBreeds( block: ( List<Breed>?) -> Unit ) {

        runQuery {
            block( api.getAllBreeds() )
        }
    }

    actual fun listSubBreeds( bread: String, block: ( Breed? ) -> Unit ) {

        runQuery {
            block( api.getSubBreads( bread ) )
        }
    }

    actual fun imageRandom( block: ( String? ) -> Unit ) {

        runQuery {
            block( api.getUrlImageRandom() )
        }
    }

    actual fun breedImages( breed: String, block: ( List<String>? ) -> Unit ) {

        runQuery {
            block( api.getBreedImages( breed ))
        }
    }

    private fun <T> runQuery( block: suspend () -> T ) : T {

        return runBlocking {
            block()
        }
    }
}*/