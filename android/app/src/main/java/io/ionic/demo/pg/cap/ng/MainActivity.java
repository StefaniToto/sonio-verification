package io.ionic.demo.pg.cap.ng;
import android.webkit.PermissionRequest;

import com.capacitorjs.plugins.camera.CameraPlugin;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
//    @Override
//    public void onCreate(Bundle savedInstanceState) {
//        registerPlugin(CameraPlugin.class);
//        super.onCreate(savedInstanceState);
//    }

    @Override
    public void onPermissionRequest(PermissionRequest request) {
        registerPlugin(CameraPlugin.class);
        request.grant(request.getResources());
    }
}
