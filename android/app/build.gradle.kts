plugins {
    id("com.android.application")
    id("kotlin-android")
    id("dev.flutter.flutter-gradle-plugin")
}

android {
    namespace = "com.example.doc_reader"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.example.doc_reader"
        minSdk = 23
        targetSdk = 35
        versionCode = 1
        versionName = "1.0.0"
    }
}

flutter {
    source = "../.."
}