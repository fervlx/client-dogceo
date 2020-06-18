package com.fervlx.dogceo

class DogCeoClient {

    private val api  = DogceoAPI()

    fun disconnect() {
        api.dispose()
    }

    fun listAllBreeds( block: ( List<Breed>? ) -> Unit ) {

        runQuery {
            block( api.getAllBreeds() )
        }
    }

    fun imageRandom( block: ( String? ) -> Unit ) {

        runQuery {
            block( api.getUrlImageRandom() )
        }
    }

    fun breedImages( breed: String, block: ( List<String>? ) -> Unit ) {

        runQuery {
            block( api.getBreedImages( breed ))
        }
    }

    fun listSubBreeds( bread: String, block: ( Breed? ) -> Unit ) {

        runQuery {
            block( api.getSubBreads( bread ) )
        }
    }
}