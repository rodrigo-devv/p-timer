import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">I&apos;ll work on</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Give a name for your project"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Project 1" />
        <option value="Project 2" />
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutes.</span>
    </FormContainer>
  )
}
