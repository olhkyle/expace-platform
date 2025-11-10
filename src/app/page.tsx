import Link from 'next/link'

export default function Home() {
	return (
		<div className="p-4">
			{/* <div className="p-2 text-sm text-gray-500 font-semibold bg-gray-100 rounded-md">
        스케치업 1은 Sketchup, 스케치업 2은 Sketchup, Enscape, Photoshop을
        활용합니다.
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
        {[model1, model2, model3, model4].map((imageSrc, idx) => (
          <div
            key={`model ${idx}`}
            className="flex justify-center items-center rounded-md"
          >
            <Image
              src={imageSrc}
              alt={`model ${idx}`}
              className="block w-full h-full rounded-md"
              width={400}
              height={225}
              sizes="(max-width: 360px) 320px, (max-width: 480px) 448px, (max-width: 640px) 600px, 800px"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        ))}
      </div> */}

			<div className="mt-10">
				<h4 className="text-xl font-bold">유용한 사이트</h4>
				<div className="mt-4">
					<span className="font-semibold">Free 3D Modeling 사이트</span>
					<ul className="flex flex-col gap-4 mt-4 sm:flex-row">
						<li>
							<Link
								href="https://3dwarehouse.sketchup.com/"
								target="_blank"
								className="p-2 text-gray-700 bg-gray-100 font-medium rounded-md hover:opacity-70 transition-opacity"
							>
								📎 SketchUp 3D Warehouse
							</Link>
						</li>
						<li>
							<Link
								href="https://www.uncover3dmodelling.com/source/list"
								target="_blank"
								className="p-2 text-gray-700 bg-gray-100 font-medium rounded-md hover:opacity-70 transition-opacity"
							>
								📎 uncover3d modeling
							</Link>
						</li>
						<li>
							<Link
								href="https://free3d.com/"
								target="_blank"
								className="p-2 text-gray-700 bg-gray-100 font-medium rounded-md hover:opacity-70 transition-opacity"
							>
								📎 free3d.com
							</Link>
						</li>
					</ul>
				</div>
				<div className="my-10">
					<span className="font-semibold">Material Download Site</span>
					<ul className="flex gap-4 mt-4">
						<li>
							<Link
								href="https://architextures.org/"
								target="_blank"
								className="p-2 text-blue-600 bg-blue-100 font-medium rounded-md hover:opacity-70 transition-opacity"
							>
								💿 architextures
							</Link>
						</li>
						<li>
							<Link
								href="https://ambientcg.com/list?type=material"
								target="_blank"
								className="p-2 text-blue-600 bg-blue-100 font-medium rounded-md hover:opacity-70 transition-opacity"
							>
								💿 ambientcg
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
