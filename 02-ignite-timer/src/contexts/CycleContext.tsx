import { createContext, useReducer, useState, type ReactNode } from 'react'
import { NewCycleFormData } from '../pages/Home'

interface Cycle extends NewCycleFormData {
  id: string;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CycleContext {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  createNewCycle: (data: NewCycleFormData) => void
  finishCycle: () => void;
  interruptCycle: () => void;
  setSecondsPassed: (seconds: number) => void;
}

export const CyclesContext = createContext({} as CycleContext)

interface CyclesContextProviderProps {
  children: ReactNode;
}

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer((
    state: CyclesState, action: any,
  ) => {
    switch (action.type) {
      case 'ADD_NEW_CYCLE': return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
      case 'INTERRUPT_CYCLE': return {
        ...state,
        cycles: [
          ...state.cycles,
          state.cycles.map(cycle => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() }
            } else {
              return cycle
            }
          }),
        ],
        activeCycleId: null,
      }
      case 'FINISH_CYCLE': return {
        ...state,
        cycles: [
          ...state.cycles,
          state.cycles.map(cycle => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, finishedDate: new Date() }
            } else {
              return cycle
            }
          }),
        ],
      }
      default: return state
    }
  }, {
    cycles: [],
    activeCycleId: null,
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })

    setAmountSecondsPassed(0)
  }

  function finishCycle() {
    dispatch({
      type: 'FINISH_CYCLE',
      payload: {
        activeCycleId,
      },
    })
  }

  function interruptCycle() {
    dispatch({
      type: 'INTERRUPT_CYCLE',
      payload: {
        activeCycleId,
      },
    })
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        createNewCycle,
        finishCycle,
        interruptCycle,
        setSecondsPassed,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
