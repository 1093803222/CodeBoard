class Node {
  constructor(value) {
    this.l = null
    this.r = null
    this.value = value
  }

  setL(node) {
    this.l = node
  }

  setR(node) {
    this.r = node
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  createTree(data) {
    this.root = this.createTreeWrapper(data)
  }
  createTreeWrapper(data) {
    let node = new Node(data.value)
    if (data.child) {
      node.setL(this.createTreeWrapper(data.child.l))
      node.setR(this.createTreeWrapper(data.child.r))
    }
    return node
  }

  dfs() {
    this.dfsWrapper(this.root)
  }
  // 先序遍历
  dfsWrapper(node) {
    if (!node) return
    console.log(node.value)
    this.dfsWrapper(node.l)
    this.dfsWrapper(node.r)
  }

  getDeepth() {
    return this.getDeepthWrpper(this.root)
  }
  getDeepthWrpper(node) {
    let LD, LR
    if (node === null) return 0
    console.log(node.value)
    LD = this.getDeepthWrpper(node.l)
    LR = this.getDeepthWrpper(node.r)
    return (LD > LR ? LD : LR) + 1
  }
}

const data = {
  value: 0,
  child: {
    l: {
      value: 1,
      child: {
        l: {
          value: 3,
          child: null
        },
        r: {
          value: 4,
          child: null
        }
      }
    },
    r: {
      value: 2,
      child: {
        l: {
          value: 5,
          child: null
        },
        r: {
          value: 6,
          child: null
        }
      }
    }
  }
}

let tree = new Tree()
tree.createTree(data)

console.log(`中序遍历`)
tree.dfs()

console.log(`得到树高的遍历过程`)
console.log(`树的高度：${tree.getDeepth()}`)
