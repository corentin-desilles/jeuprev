// // import Card from './components/Card/Card'
// import styles from './App.module.scss'
// import { useEffect, useState } from 'react'
// import { cardsData, profileMapping } from './data/cardsData'
// // import * as THREE from 'three'
// // import { GLTFLoader } from 'three-gltf-loader'

// function App() {
//     // const scene = new THREE.Scene()
//     // const camera = new THREE.PerspectiveCamera(
//     //     75,
//     //     window.innerWidth / window.innerHeight,
//     //     0.1,
//     //     1000
//     // )
//     // const renderer = new THREE.WebGLRenderer()

//     // renderer.setSize(window.innerWidth, window.innerHeight)
//     // document.body.appendChild(renderer.domElement)

//     const [currentCardIndex, setCurrentCardIndex] = useState(0)
//     const [playerChoices, setPlayerChoices] = useState([])
//     const [playerProfile, setPlayerProfile] = useState('')
//     // const modelRef = useRef()

//     const handleChoiceClick = choiceText => {
//         const selectedChoice = profileMapping[choiceText]
//         const nextCardIndex = currentCardIndex + 1

//         const updatedPlayerChoices = [
//             ...playerChoices,
//             { choice: choiceText, profile: selectedChoice },
//         ]
//         setPlayerChoices(updatedPlayerChoices)

//         setCurrentCardIndex(nextCardIndex)
//     }

//     useEffect(() => {
//         if (currentCardIndex === cardsData.length) {
//             determinePlayertype(playerChoices)
//         }
//     }, [currentCardIndex, playerChoices])

//     //Fonction pour charger le modèle 3D
//     // useEffect(() => {
//     //     const loadModelForCurrentCard = async () => {
//     //         const card = cardsData[currentCardIndex]
//     //         console.log('Card:', card) //Vérifier si carte est correctement récupérée

//     //         if (card && card.model) {
//     //             const loader = new GLTFLoader()
//     //             try {
//     //                 const gltf = await loader.loadAsync(
//     //                     `/models/${card.model}.glb`
//     //                 )
//     //                 console.log('Loaded GLTF:', gltf) // check si model gltf est chargé
//     //                 const model = gltf.scene
//     //                 console.log('Model:', model) // check si model obtenu

//     //                 //acces au conteneur html via la ref et ajouter le model à la scene three
//     //                 if (modelRef.current) {
//     //                     modelRef.current.appendChild(model)
//     //                 } else {
//     //                     console.log('ModelRef.current is not defined')
//     //                 }
//     //             } catch (error) {
//     //                 console.error('Error loading GLTF:', error)
//     //             }
//     //         } else {
//     //             console.log(
//     //                 'Card or model is undefined gros boulet, rien ne marche c SUPER!!!'
//     //             )
//     //         }
//     //     }

//     //     //Appel pour charger le modèle 3D pour la carte actuelle
//     //     loadModelForCurrentCard()
//     // }, [currentCardIndex])

//     const determinePlayertype = choices => {
//         let profileEmpatheCounter = 0
//         let profilePragmatiqueCounter = 0
//         let profileCurieuxCounter = 0

//         choices.forEach(choice => {
//             if (choice.profile === 'Profil empathe') {
//                 profileEmpatheCounter++
//             } else if (choice.profile === 'Profil pragmatique') {
//                 profilePragmatiqueCounter++
//             } else if (choice.profile === 'Profil curieux') {
//                 profileCurieuxCounter++
//             }
//         })

//         //Comparaison des compteurs pour déterminer le profil majoritaire
//         const maxCount = Math.max(
//             profileEmpatheCounter,
//             profilePragmatiqueCounter,
//             profileCurieuxCounter
//         )
//         let finalProfile = ''

//         if (maxCount === profileEmpatheCounter) {
//             finalProfile = 'Profil empathe'
//         } else if (maxCount === profilePragmatiqueCounter) {
//             finalProfile = 'Profil pragmatique'
//         } else if (maxCount === profileCurieuxCounter) {
//             finalProfile = 'Profil curieux'
//         }

//         setPlayerProfile(finalProfile)
//     }

//     return (
//         <div className={`${styles.app}`}>
//             {currentCardIndex < cardsData.length ? (
//                 <div className={`${styles.game}`}>
//                     <h2>{cardsData[currentCardIndex].title}</h2>
//                     <p>{cardsData[currentCardIndex].text}</p>

//                     <div className={`${styles.buttonContainer}`}>
//                         {cardsData[currentCardIndex].choices.map(choice => (
//                             <button
//                                 key={choice.id}
//                                 onClick={() => handleChoiceClick(choice.text)}
//                             >
//                                 {choice.text}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             ) : (
//                 <div className="result">
//                     <h2>Résultat : {playerProfile}</h2>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default App
