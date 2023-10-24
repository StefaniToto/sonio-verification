package io.ionic.demo.pg.cap.ng;
import android.os.Bundle;

import com.capacitorjs.plugins.camera.CameraPlugin;
import com.getcapacitor.BridgeActivity;

import org.apache.cordova.inappbrowser.InAppBrowser;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(CameraPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
