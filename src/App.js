import styles from './App.module.scss'
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { cardsData, profileMapping } from './data/cardsData'
import Experience from './Experience'

function App() {
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [playerChoices, setPlayerChoices] = useState([])
    const [playerProfile, setPlayerProfile] = useState('')

    const handleChoiceClick = choiceText => {
        const selectedChoice = profileMapping[choiceText]
        const nextCardIndex = currentCardIndex + 1

        const updatedPlayerChoices = [
            ...playerChoices,
            { choice: choiceText, profile: selectedChoice },
        ]
        setPlayerChoices(updatedPlayerChoices)

        setCurrentCardIndex(nextCardIndex)
    }

    useEffect(() => {
        if (currentCardIndex === cardsData.length) {
            determinePlayertype(playerChoices)
        }
    }, [currentCardIndex, playerChoices])

    const determinePlayertype = choices => {
        let profileEmpatheCounter = 0
        let profilePragmatiqueCounter = 0
        let profileCurieuxCounter = 0

        choices.forEach(choice => {
            if (choice.profile === 'Profil empathe') {
                profileEmpatheCounter++
            } else if (choice.profile === 'Profil pragmatique') {
                profilePragmatiqueCounter++
            } else if (choice.profile === 'Profil curieux') {
                profileCurieuxCounter++
            }
        })

        //Comparaison des compteurs pour déterminer le profil majoritaire
        const maxCount = Math.max(
            profileEmpatheCounter,
            profilePragmatiqueCounter,
            profileCurieuxCounter
        )
        let finalProfile = ''

        if (maxCount === profileEmpatheCounter) {
            finalProfile = 'Profil empathe'
        } else if (maxCount === profilePragmatiqueCounter) {
            finalProfile = 'Profil pragmatique'
        } else if (maxCount === profileCurieuxCounter) {
            finalProfile = 'Profil curieux'
        }

        setPlayerProfile(finalProfile)
    }

    const currentCard = cardsData[currentCardIndex]

    return (
        <div className={`${styles.app}`}>
            {currentCardIndex < cardsData.length ? (
                <div className={`${styles.game}`}>
                    <div className={`${styles.buttonAndSceneContainer}`}>
                        <div className={`${styles.buttonContainer}`}>
                            <h2>{currentCard.title}</h2>
                            <p>{currentCard.text}</p>
                            <button
                                className={`${styles.buttonLeft}`}
                                onClick={() =>
                                    handleChoiceClick(
                                        currentCard.choices[0].text
                                    )
                                }
                            >
                                {currentCard.choices[0].text}
                            </button>

                            <button
                                className={`${styles.buttonRight}`}
                                onClick={() =>
                                    handleChoiceClick(
                                        currentCard.choices[1].text
                                    )
                                }
                            >
                                {currentCard.choices[1].text}
                            </button>
                        </div>
                        <div className={`${styles.modelScene}`}>
                            <Canvas
                                shadows
                                camera={{
                                    fov: 45,
                                    near: 0.1,
                                    far: 200,
                                    position: [1, 4, 10],
                                }}
                            >
                                <Experience model={currentCard.model} />
                            </Canvas>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="result">
                    <h2>Résultat : {playerProfile}</h2>
                </div>
            )}
        </div>
    )
}

export default App
