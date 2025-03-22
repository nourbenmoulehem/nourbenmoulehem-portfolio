/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: helmitakasu (https://sketchfab.com/helmitachi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/paimon-idle-animation-990c9d459212467288b64e9b19c9c9b5
Title: Paimon Idle Animation
*/
"use client"

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model-3d/paimon_idle_animation.glb')
  console.log("🚀 ~ Model ~ animations:", animations)

  

  // useFrame((state, delta, xrFrame) => {
  //   // This function runs at the native refresh rate inside of a shared render-loop
  // })

  const { actions } = useAnimations(animations, group)




  // useEffect(() => {
  //   // Play the animation when the component mounts
  //   if (actions && actions['������_arm']) {
  //     actions['������_arm'].play();
  //   }

  //   // Cleanup the animation when the component unmounts
  //   return () => {
  //     if (actions && actions['������_arm']) {
  //       actions['������_arm'].stop();
  //     }
  //   };
  // }, [actions]);
  
  return (
    <group ref={group} {...props} dispose={null}
      position={[0, -3, 0]}
      scale={[0.007, 0.007, 0.007]}
      rotation={[0, 0, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="a12fc053079e4875a6a9cd3df82e2102fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="������" rotation={[-Math.PI / 2, 0, 0]} scale={1000}>
                  <group name="������_arm">
                    <group name="Object_6">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_327"
                        geometry={nodes.Object_327.geometry}
                        material={materials.material}
                        skeleton={nodes.Object_327.skeleton}
                        morphTargetDictionary={nodes.Object_327.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_327.morphTargetInfluences}
                      />
                      <skinnedMesh
                        name="Object_328"
                        geometry={nodes.Object_328.geometry}
                        material={materials.material_1}
                        skeleton={nodes.Object_328.skeleton}
                        morphTargetDictionary={nodes.Object_328.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_328.morphTargetInfluences}
                      />
                      <skinnedMesh
                        name="Object_329"
                        geometry={nodes.Object_329.geometry}
                        material={materials.material_2}
                        skeleton={nodes.Object_329.skeleton}
                        morphTargetDictionary={nodes.Object_329.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_329.morphTargetInfluences}
                      />
                      <skinnedMesh
                        name="Object_330"
                        geometry={nodes.Object_330.geometry}
                        material={materials.material_3}
                        skeleton={nodes.Object_330.skeleton}
                        morphTargetDictionary={nodes.Object_330.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_330.morphTargetInfluences}
                      />
                      <skinnedMesh
                        name="Object_331"
                        geometry={nodes.Object_331.geometry}
                        material={materials.material_4}
                        skeleton={nodes.Object_331.skeleton}
                        morphTargetDictionary={nodes.Object_331.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_331.morphTargetInfluences}
                      />
                      <skinnedMesh
                        name="Object_332"
                        geometry={nodes.Object_332.geometry}
                        material={materials.material_5}
                        skeleton={nodes.Object_332.skeleton}
                        morphTargetDictionary={nodes.Object_332.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_332.morphTargetInfluences}
                      />
                      <skinnedMesh
                        name="Object_333"
                        geometry={nodes.Object_333.geometry}
                        material={materials.material_6}
                        skeleton={nodes.Object_333.skeleton}
                        morphTargetDictionary={nodes.Object_333.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_333.morphTargetInfluences}
                      />
                      <group name="Object_326" rotation={[-Math.PI / 2, 0, 0]} scale={1000} />
                    </group>
                  </group>
                </group>
                <group name="������_mesh" rotation={[-Math.PI / 2, 0, 0]} scale={1000} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model-3d/paimon_idle_animation.glb')
