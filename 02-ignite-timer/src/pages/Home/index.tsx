import { createContext, useState } from 'react'
import {
  HomeContainer, StartCountdownButton, StopCountdownButton,
} from './styles'
import { Play, HandPalm } from 'phosphor-react'
import { NewCycleForm, NewCycleFormData } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

interface Cycle extends NewCycleFormData {
  id: string;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CycleContext {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  handleFinishedCycle: () => void;
}

export const CyclesContext = createContext({} as CycleContext)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function handleCreateNewCicle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles(state => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleFinishedCycle() {
    setCycles(
      state => state.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function handleInterruptCycle() {
    setCycles(
      state => state.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)} action="submit">
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, handleFinishedCycle }}
        >
          <NewCycleForm />
          <Countdown />

        </CyclesContext.Provider>

        {
          activeCycle
            ? (
              <StopCountdownButton onClick={handleInterruptCycle} type="button">
                <HandPalm size={24} />
                Interromper
              </StopCountdownButton>
              )
            : (
              <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                <Play size={24} />
                Começar
              </StartCountdownButton>
              )
        }
      </form>
    </HomeContainer>
  )
}
