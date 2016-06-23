linked list
next ref
last link points to nil

cyclic

def cyclic_list?(node)
	node_hash = Hash.new()
	first = node
	until node.next == nil
		return true if node.next == first
		node = node.next
	end
	
	# loop do
	# 	if node.next == nil
	# 		return false
	# 	elsif node_hash.keys.include?(node.next)
	# 		return true
	# 	else
	# 		node_hash[node] = true
	# 		node = node.next
	# 	end
	# end
end
