// import Card from './components/Card/Card'
import styles from './App.module.scss'
import { useEffect, useState } from 'react'
import { cardsData, profileMapping } from './data/cardsData'

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

    return (
        <div className={`${styles.app}`}>
            {currentCardIndex < cardsData.length ? (
                <div className={`${styles.game}`}>
                    <h2>{cardsData[currentCardIndex].title}</h2>
                    <p>{cardsData[currentCardIndex].text}</p>
                    <div className={`${styles.buttonContainer}`}>
                        {cardsData[currentCardIndex].choices.map(choice => (
                            <button
                                key={choice.id}
                                onClick={() => handleChoiceClick(choice.text)}
                            >
                                {choice.text}
                            </button>
                        ))}
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
