package com.fervlx.dogceo

import kotlinx.coroutines.runBlocking

actual fun <T> runQuery( block: suspend () -> T ) {

    runBlocking {
        block()
    }
}