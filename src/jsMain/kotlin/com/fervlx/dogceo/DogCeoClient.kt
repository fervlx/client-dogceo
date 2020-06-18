package com.fervlx.dogceo

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

/*actual class DogCeoClient {

    private val api  = DogceoAPI()

    actual fun listAllBreeds( block: (List<Breed>? ) -> Unit) {

        runQuery {
            block( api.getAllBreeds() )
        }
    }

    actual fun imageRandom( block: (String?) -> Unit ) {

        runQuery {
            block( api.getUrlImageRandom() )
        }
    }

    actual fun breedImages(breed: String, block: (List<String>?) -> Unit) {
        runQuery {

        }
    }

    actual fun listSubBreeds(bread: String, block: (Breed?) -> Unit) {

    }

    private fun <T> runQuery( block: suspend () -> T ) {

         GlobalScope.launch {
            block()
        }
    }
}*/