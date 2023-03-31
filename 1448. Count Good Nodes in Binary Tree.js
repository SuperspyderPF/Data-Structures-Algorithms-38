/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function goodNodes(root, max = root.val){
    let output = 0
    if(root.val >= max) output++
    max = Math.max(Math.max(root.val, max))
    if(root.left) output += goodNodes(root.left, max)
    if(root.right) output += goodNodes(root.right, max)
    return output
}