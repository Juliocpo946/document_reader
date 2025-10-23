package com.example.doc_reader

import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel
import android.os.Environment
import android.provider.MediaStore
import java.io.File

class MainActivity: FlutterActivity() {
    private val CHANNEL = "com.example.doc_reader/files"

    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler {
                call, result ->
            if (call.method == "scanFiles") {
                val files = scanForDocuments()
                result.success(files)
            } else {
                result.notImplemented()
            }
        }
    }

    private fun scanForDocuments(): List<String> {
        val fileList = mutableListOf<String>()
        val projection = arrayOf(MediaStore.Files.FileColumns.DATA)
        val selection = MediaStore.Files.FileColumns.MIME_TYPE + " IN (?, ?, ?, ?, ?, ?)"
        val selectionArgs = arrayOf(
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "text/plain"
        )

        val cursor = contentResolver.query(
            MediaStore.Files.getContentUri("external"),
            projection,
            selection,
            selectionArgs,
            null
        )

        cursor?.use {
            val columnIndex = it.getColumnIndexOrThrow(MediaStore.Files.FileColumns.DATA)
            while (it.moveToNext()) {
                val path = it.getString(columnIndex)
                fileList.add(path)
            }
        }
        return fileList
    }
}