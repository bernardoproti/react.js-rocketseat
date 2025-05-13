import { produce } from 'immer'
import { Cycle } from '../../contexts/CycleContext'
import { ActionTypes } from './actions'

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function cycleReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.INTERRUPT_CYCLE:
      return produce(state, draft => {
        const currenctCycleIndex = draft.cycles.findIndex(cycle => {
          return cycle.id === draft.activeCycleId
        })

        if (currenctCycleIndex < 0) {
          return draft
        }

        draft.cycles[currenctCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })

    case ActionTypes.FINISH_CYCLE:
      return produce(state, draft => {
        const currenctCycleIndex = draft.cycles.findIndex(cycle => {
          return cycle.id === draft.activeCycleId
        })

        if (currenctCycleIndex < 0) {
          return draft
        }

        draft.cycles[currenctCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    default: return state
  }
}
