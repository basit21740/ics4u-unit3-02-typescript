/*
* This program test stack class.
*
* @author  Abdul Basit
* @version 1.0
* @since   2022-02-03
*/

class MrCoxallStack {
  // this is a stack class.
  private stack: number[] = []

  push (pushValue: number) {
    // this method adds a value to the stack.
    this.stack.push(pushValue)
  }

  showStack () {
    // this prints out the stack.
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i])
    }
  }

  pop () {
    // this method removes the last part of the stack.
    const returnValue = this.stack[this.stack.length - 1]
    const index = this.stack.indexOf(this.stack.length - 1, 0)
    this.stack.splice(index, 1)
    return returnValue
  }
}

const aStack = new MrCoxallStack()


console.log('Pushing #1:')
aStack.push(40)
aStack.showStack()

console.log('\nPushing #2:')
aStack.push(10)
aStack.showStack()

console.log('\nPopping...')
console.log("Removed:" + aStack.pop()+ "")
aStack.pop()

aStack.showStack()

console.log('\nDone.')
