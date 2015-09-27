def print_triangle(num)
	num_to_print = 1
	until num_to_print > num
		num_to_print.times do
			print "*"
		end
		puts
		num_to_print += 1
	end
end

puts
puts
print_triangle(5)
print_triangle(-34)