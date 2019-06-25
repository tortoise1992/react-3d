import React, { Component } from 'react'
import './index.less'
import * as THREE from 'three'
import Orbitcontrols from 'three-orbitcontrols'
export default class Home extends Component {
    componentDidMount(){
        this.initThree();
    }
    initThree(){
        let camera, scene, renderer;
        let container = document.getElementById('demo');
        let width = container.clientWidth,height = container.clientHeight;

        init();
        animate();

        function init() {
            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera( 60, width / height, 1, 2000 );
            camera.position.x = -10;
            camera.position.y = 15;
            camera.position.z = 10;
            camera.lookAt( scene.position );

            //控制地球
            let orbitControls = new Orbitcontrols(camera);
            orbitControls.autoRotate = false;
            // let clock = new THREE.Clock();
            //光源
            let ambi = new THREE.AmbientLight(0x0099ff);
            scene.add(ambi);

            let spotLight = new THREE.DirectionalLight(0xffffff);
            spotLight.position.set(550, 100, 550);
            spotLight.intensity = 0.6;

            scene.add(spotLight);
           
            // 创建一个长宽高均为 4 个单位长度的立方体（几何体）
            var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)

            // 创建材质（该材质不受光源影响）
            var cubeMaterial = new THREE.MeshBasicMaterial({
                color: 0xcccccc
            })

            // 创建一个立方体网格（mesh）：将材质包裹在几何体上
            var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

            // 设置网格的位置
            cube.position.x = 0
            cube.position.y = -2
            cube.position.z = 0

            // 将立方体网格加入到场景中
            scene.add(cube)


            renderer = new THREE.WebGLRenderer();
            renderer.setClearColor( 0xffffff );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( width, height );
            container.appendChild( renderer.domElement );

        }

        function animate() {
            requestAnimationFrame( animate );
            render();
        }
        function render() {     
            renderer.render( scene, camera );
        }
    }

    render() {
        return (
            <div id='demo'>
                
            </div>
        )
    }
}
